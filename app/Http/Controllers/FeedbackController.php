<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
use App\Enums\FeedbackCategory;
use App\Enums\FeedbackRating;
use Illuminate\Validation\Rules\Enum;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Feedback::with(['student.user', 'supervisor'])->paginate(20);
    }

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
            'student_id'      => 'required|exists:students,id',
            'supervisor_id'   => 'required|exists:users,id',
            'date_received'   => 'required|date',
            'supervisor_name' => 'required|string|max:100',
            'feedback_text'   => 'required|string',
            'rating'          => ['required', new Enum(FeedbackRating::class)],
            'category'        => ['required', new Enum(FeedbackCategory::class)],
            'osce_score'      => 'nullable|integer|min:0|max:100',
        ]);

        $feedback = Feedback::create($data);

        return response()->json($feedback, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Feedback $feedback)
    {
        return $feedback->load(['student.user', 'supervisor']);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feedback $feedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feedback $feedback)
    {
        $data = $request->validate([
            'date_received'   => 'sometimes|date',
            'supervisor_name' => 'sometimes|string|max:100',
            'feedback_text'   => 'sometimes|string',
            'rating'          => ['sometimes', new Enum(FeedbackRating::class)],
            'category'        => ['sometimes', new Enum(FeedbackCategory::class)],
            'osce_score'      => 'sometimes|nullable|integer|min:0|max:100',
        ]);

        $feedback->update($data);

        return response()->json($feedback);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedback $feedback)
    {
        $feedback->delete();
        return response()->json('Feedback deleted successfully',204);
    }
}
