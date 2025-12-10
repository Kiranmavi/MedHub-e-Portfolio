<?php

namespace App\Http\Controllers;

use App\Models\Placement;
use Illuminate\Http\Request;
use App\Enums\PlacementStatus;
use Illuminate\Validation\Rules\Enum;

class PlacementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Placement::paginate(20);
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
            'student_id' => 'required|exists:students,id',
            'placement_date' => 'required|date',
            'placement_location' => 'required|string|max:200',
            'ward_department' => 'required|string|max:150',
            'status'             => ['required', new Enum(PlacementStatus::class)],
            'arrival_time'       => 'nullable|date_format:H:i',
            'departure_time'     => 'nullable|date_format:H:i',
            'notes'              => 'nullable|string',
        ]);

        $placement = Placement::create($data);

        return response()->json($placement, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Placement $placement)
    {
        return $placement->load(['student.user']);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Placement $placement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Placement $placement)
    {
        $data = $request->validate([
            'placement_date'     => 'sometimes|date',
            'placement_location' => 'sometimes|string|max:250',
            'ward_department'    => 'sometimes|string|max:200',
            'status'             => ['sometimes', new Enum(PlacementStatus::class)],
            'arrival_time'       => 'sometimes|nullable|date_format:H:i',
            'departure_time'     => 'sometimes|nullable|date_format:H:i',
            'notes'              => 'sometimes|nullable|string',
        ]);

        $placement->update($data);

        return response()->json($placement);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Placement $placement)
    {
        $placement->delete();

        return response()->json('placement deleted successfully', 204);
    }
}
