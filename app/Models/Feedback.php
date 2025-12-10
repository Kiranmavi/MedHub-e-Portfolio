<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Enums\FeedbackRating;
use App\Enums\FeedbackCategory;

class Feedback extends Model
{
    use HasFactory;

    protected $fillable=[
        'student_id',
        'supervisor_id',
        'date_received',
        'supervisor_name',
        'feedback_text',
        'rating',
        'category',
        'osce_score',
    ];
    protected $casts = [
        'date_received' => 'date',
        'rating'        => FeedbackRating::class,
        'category'      => FeedbackCategory::class,
    ];

    public function student(){
        return $this->belongsTo(Student::class);
    }
    public function supervisor(){
        return $this->belongsTo(User::class,'supervisor_id');
    }
}
