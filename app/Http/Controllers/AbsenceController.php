<?php

namespace App\Http\Controllers;

use App\Models\Absence;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Enum;
use App\Enums\AbsenceApproval;

class AbsenceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Absence::with(['student.user', 'admin', 'approver'])->paginate(20);    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'student_id'     => 'required|exists:students,id',
            'admin_id'       => 'required|exists:users,id',
            'absence_date'   => 'required|date',
            'absence_reason' => 'required|string',   // or enum if you add one
            'justification'  => 'nullable|string',
            'approved_by'    => 'nullable|exists:users,id',
            'approved'       => ['required', new Enum(AbsenceApproval::class)],
            'approved_date'  => 'nullable|date',
        ]);
        $absence = Absence::create($data);

        return response()->json($absence, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Absence $absence)
    {
        return $absence->load(['student.user', 'admin', 'approver']);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Absence $absence)
    {
        $data = $request->validate([
            'absence_date'   => 'sometimes|date',
            'absence_reason' => 'sometimes|string',
            'justification'  => 'sometimes|nullable|string',
            'approved_by'    => 'sometimes|nullable|exists:users,id',
            'approved'       => ['sometimes', new Enum(AbsenceApproval::class)],
            'approved_date'  => 'sometimes|nullable|date',
        ]);

        $absence->update($data);

        return response()->json($absence);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Absence $absence)
    {
        $data = $request->validate([
            'absence_date'   => 'sometimes|date',
            'absence_reason' => 'sometimes|string',
            'justification'  => 'sometimes|nullable|string',
            'approved_by'    => 'sometimes|nullable|exists:users,id',
            'approved'       => ['sometimes', new Enum(AbsenceApproval::class)],
            'approved_date'  => 'sometimes|nullable|date',
        ]);

        $absence->update($data);

        return response()->json($absence);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Absence $absence)
    {
        $absence->delete();

        return response()->json('Absence deleted successfully', 204);
    }
}
