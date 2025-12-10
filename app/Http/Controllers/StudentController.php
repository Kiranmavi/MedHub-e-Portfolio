<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Student::with('user')-> paginate(20);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data= $request->validate([
            'user_id' => 'required|exists:users,id',
            'student_uni_id' => 'required|string|max:20',
            'programme' => 'required|string|max:250',
            'start_date' => 'required| date'
        ]); 
        $student =Student::create($data);
        return response()-> json($student,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        return $student->load(['user','placement','feedback','absence']);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Student $student)
    {
       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        $data = $request->validate([
            'student_uni_id' => 'sometimes|string|max:20',
            'programme'      => 'sometimes|string|max:250',
            'start_date'     => 'sometimes|date',
        ]);
        $student->update($data);
        return response()->json($student,201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $student -> delete($student);
        return response()-> json("Student deleted successfully",201);
    }
}
