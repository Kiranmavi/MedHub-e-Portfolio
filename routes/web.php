<?php

use App\Http\Controllers\AbsenceController;
use App\Http\Controllers\FeedbackController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\PlacementController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/home', function (){
    return view('home');
});

Route::get('/app', function (){
    return view('app');
});

Route::prefix("portfolio")-> group(function(){
    Route::get('/organi', function (){
        return 'organization';
    });
    Route::get('/company', function (){
        return 'company';
    }); 
});
// /routes with parameters
// /Route::get('/contact/{firstname}{lastname}', function ($firstname,$lastname){
//     return $firstname. " ". $lastname;
// });

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';


Route::apiResource('user', UserController::class);
Route::apiResource('student', StudentController::class);
Route::apiResource('placements', PlacementController::class);
Route::apiResource('feedback', FeedbackController::class);
Route::apiResource('absence', AbsenceController::class);
