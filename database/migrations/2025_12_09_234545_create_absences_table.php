<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('absences', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')
                  ->constrained('students')
                  ->cascadeOnDelete();
            $table->foreignId('admin_id')
                  ->constrained('users')
                  ->cascadeOnDelete();
            $table->date('absence_date');
            $table->string('absence_reason', 100);
            $table->text('justification')->nullable();
            $table->foreignId('approved_by')
                  ->nullable()
                  ->constrained('users')
                  ->nullOnDelete();
            $table->enum('approved', ['yes', 'no'])->default('no');
            $table->date('approved_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('absences');
    }
};
