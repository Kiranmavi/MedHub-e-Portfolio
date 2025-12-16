<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class ResetAutoIncrement extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:reset-ids {--tables=* : Specific tables to reset (default: all)} {--renumber : Renumber existing records sequentially}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset auto-increment IDs and optionally renumber existing records sequentially';

    /**
     * Tables to reset auto-increment
     *
     * @var array
     */
    protected $tables = [
        'users',
        'students',
        'placements',
        'feedback',
        'absences',
    ];

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $driver = DB::getDriverName();
        $tablesToReset = $this->option('tables') ?: $this->tables;
        $renumber = $this->option('renumber');

        if ($renumber) {
            $this->warn("⚠️  WARNING: Renumbering will change all existing IDs!");
            $this->warn("This may break foreign key relationships. Use with caution!");
            
            if (!$this->confirm('Do you want to continue?')) {
                $this->info('Operation cancelled.');
                return 0;
            }
        }

        $this->info("Resetting auto-increment IDs for tables: " . implode(', ', $tablesToReset));
        $this->info("Database driver: {$driver}");

        // Handle foreign key dependencies - process in order
        $orderedTables = ['users', 'students', 'placements', 'feedback', 'absences'];
        $tablesToProcess = array_intersect($orderedTables, $tablesToReset);

        foreach ($tablesToProcess as $table) {
            if (!Schema::hasTable($table)) {
                $this->warn("Table '{$table}' does not exist. Skipping...");
                continue;
            }

            try {
                if ($renumber) {
                    $this->renumberTable($table, $driver);
                } else {
                    if ($driver === 'sqlite') {
                        $this->resetSqliteAutoIncrement($table);
                    } elseif ($driver === 'mysql') {
                        $this->resetMysqlAutoIncrement($table);
                    } else {
                        $this->error("Unsupported database driver: {$driver}");
                        return 1;
                    }
                }

                $this->info("✓ Reset auto-increment for '{$table}' table");
            } catch (\Exception $e) {
                $this->error("✗ Failed to reset '{$table}': " . $e->getMessage());
            }
        }

        $this->info("\nAuto-increment IDs have been reset successfully!");
        return 0;
    }

    /**
     * Renumber table records sequentially starting from 1
     */
    protected function renumberTable(string $table, string $driver): void
    {
        $records = DB::table($table)->orderBy('id')->get();
        $count = $records->count();

        if ($count === 0) {
            $this->info("  Table '{$table}' is empty. Resetting auto-increment only.");
            if ($driver === 'sqlite') {
                $this->resetSqliteAutoIncrement($table);
            } else {
                $this->resetMysqlAutoIncrement($table);
            }
            return;
        }

        $this->info("  Renumbering {$count} records in '{$table}'...");

        // Disable foreign key checks temporarily
        if ($driver === 'mysql') {
            DB::statement('SET FOREIGN_KEY_CHECKS=0');
        } elseif ($driver === 'sqlite') {
            DB::statement('PRAGMA foreign_keys = OFF');
        }

        try {
            $newId = 1;
            foreach ($records as $record) {
                $oldId = $record->id;
                
                if ($oldId != $newId) {
                    // Update the ID
                    DB::table($table)->where('id', $oldId)->update(['id' => $newId]);
                    
                    // Update foreign keys in dependent tables
                    $this->updateForeignKeys($table, $oldId, $newId, $driver);
                }
                
                $newId++;
            }

            // Reset auto-increment
            if ($driver === 'sqlite') {
                DB::statement("DELETE FROM sqlite_sequence WHERE name = '{$table}'");
                DB::statement("INSERT INTO sqlite_sequence (name, seq) VALUES ('{$table}', {$count})");
            } else {
                DB::statement("ALTER TABLE `{$table}` AUTO_INCREMENT = " . ($count + 1));
            }
        } finally {
            // Re-enable foreign key checks
            if ($driver === 'mysql') {
                DB::statement('SET FOREIGN_KEY_CHECKS=1');
            } elseif ($driver === 'sqlite') {
                DB::statement('PRAGMA foreign_keys = ON');
            }
        }
    }

    /**
     * Update foreign keys in dependent tables
     */
    protected function updateForeignKeys(string $table, int $oldId, int $newId, string $driver): void
    {
        $foreignKeyMap = [
            'users' => [
                ['table' => 'students', 'column' => 'user_id'],
                ['table' => 'feedback', 'column' => 'supervisor_id'],
                ['table' => 'absences', 'column' => 'admin_id'],
                ['table' => 'absences', 'column' => 'approved_by'],
            ],
            'students' => [
                ['table' => 'placements', 'column' => 'student_id'],
                ['table' => 'feedback', 'column' => 'student_id'],
                ['table' => 'absences', 'column' => 'student_id'],
            ],
        ];

        if (isset($foreignKeyMap[$table])) {
            foreach ($foreignKeyMap[$table] as $mapping) {
                $targetTable = $mapping['table'];
                $foreignKey = $mapping['column'];
                
                if (Schema::hasTable($targetTable)) {
                    DB::table($targetTable)
                        ->where($foreignKey, $oldId)
                        ->update([$foreignKey => $newId]);
                }
            }
        }
    }

    /**
     * Reset auto-increment for SQLite
     */
    protected function resetSqliteAutoIncrement(string $table): void
    {
        // Get the current max ID
        $maxId = DB::table($table)->max('id') ?? 0;

        if ($maxId > 0) {
            // Set sequence to max ID so next insert gets max+1
            DB::statement("DELETE FROM sqlite_sequence WHERE name = '{$table}'");
            DB::statement("INSERT INTO sqlite_sequence (name, seq) VALUES ('{$table}', {$maxId})");
        } else {
            // Table is empty, delete sequence so it starts from 1
            DB::statement("DELETE FROM sqlite_sequence WHERE name = '{$table}'");
        }
    }

    /**
     * Reset auto-increment for MySQL
     */
    protected function resetMysqlAutoIncrement(string $table): void
    {
        // Get the current max ID
        $maxId = DB::table($table)->max('id') ?? 0;
        
        // Set auto-increment to max+1 (or 1 if empty)
        $nextId = $maxId > 0 ? $maxId + 1 : 1;
        DB::statement("ALTER TABLE `{$table}` AUTO_INCREMENT = {$nextId}");
    }
}
