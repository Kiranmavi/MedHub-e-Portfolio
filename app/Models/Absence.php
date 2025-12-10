<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Enums\AbsenceApproval;

class Absence extends Model
{
    use HasFactory;

    protected $fillable=[
        'student_id',
        'admin_id',
        'absence_date',
        'absence_reason',
        'justification',
        'approved_by',
        'approved',
        'approved_date',
    ];
    protected $casts = [
        'absence_date' => 'date',
        'approved_date' => 'date',
        // 'approved'        => AbsenceApproval::class,
    ];

    
    public function student()
    {
        return $this->belongsTo(Student::class);
    }
    public function admin(){
        return $this->belongsTo(User::class,'admin_id');
    }
    public function approver(){
        return $this->belongsTo(User::class, 'approved_by');
    }

}
