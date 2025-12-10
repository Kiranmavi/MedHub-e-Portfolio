<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AbsenceController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\PlacementController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');




Route::apiResource('users', UserController::class);
Route::apiResource('students', StudentController::class);
Route::apiResource('placements', PlacementController::class);
Route::apiResource('feedback', FeedbackController::class);
Route::apiResource('absences', AbsenceController::class);