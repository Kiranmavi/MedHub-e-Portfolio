<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'student_uni_id',
        'programme',
        'start_date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function placement()
    {
        return $this->hasMany(Placement::class);
    }
    public function feedback()
    {
        return $this->hasMany(Feedback::class);
    }
    public function absence()
    {
        return $this->hasMany(Absence::class);
    }
}
