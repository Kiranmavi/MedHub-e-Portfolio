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
        Schema::create('placements', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')
                  ->constrained('students')
                  ->cascadeOnDelete();
            $table->date('placement_date');
            $table->string('placement_location', 250);
            $table->string('ward_department', 200);
            $table->enum('status', ['attended', 'not-attended', 'cancelled', 'late'])
                  ->default('attended');
            $table->time('arrival_time')->nullable();
            $table->time('departure_time')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('placements');
    }
};
