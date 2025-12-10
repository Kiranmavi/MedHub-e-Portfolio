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
        Schema::create('feedback', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')
                  ->constrained('students')
                  ->cascadeOnDelete();
            $table->foreignId('supervisor_id')
                  ->constrained('users')
                  ->cascadeOnDelete();
            $table->date('date_received');
            $table->string('supervisor_name', 100);
            $table->text('feedback_text');
            $table->enum('rating', ['excellent', 'good', 'satisfactory', 'poor']);
            $table->enum('category', ['clinical-skills', 'professionalism', 'communication', 'written']);
            $table->unsignedInteger('osce_score')->nullable(); // 0–100, nullable
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feedback');
    }
};
