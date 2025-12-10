<?php

namespace App\Models;
use App\Enums\PlacementStatus;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Placement extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'placement_date',
        'placement_location',
        'ward_department',
        'status',
        'arrival_time',
        'departure_time',
        'notes'
    ]; 
    protected $casts = [
        'status' => PlacementStatus::class,
    ];

    public function student(){
        return $this->belongsTo(Student::class);
    }
}
