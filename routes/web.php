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

// Route::get('/', function (){
//     return view('home');
// });

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

// Route::get('dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('dashboard', function () {
    $user = auth()->user();
    $role = $user ? $user->role : 'guest';
    
    // Load user with student relationship
    $userData = null;
    if ($user) {
        $userData = [
            'id' => $user->id,
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'email' => $user->email,
            'role' => $user->role,
        ];
        
        // Load student relationship if user is a student
        $student = \App\Models\Student::where('user_id', $user->id)->first();
        if ($student) {
            $userData['student'] = [
                'id' => $student->id,
                'user_id' => $student->user_id,
                'student_uni_id' => $student->student_uni_id,
                'programme' => $student->programme,
                'start_date' => $student->start_date,
            ];
        }
    }
    
    $data = [
        'role' => $role,
        'user' => $userData,
    ];
    
    // Role-specific data
    switch ($role) {
        case 'student':
            // For students, show their own placements
            $student = \App\Models\Student::where('user_id', $user->id)->first();
            if ($student) {
                $data['placements'] = \App\Models\Placement::with(['student.user'])
                    ->where('student_id', $student->id)
                    ->orderBy('placement_date', 'desc')
                    ->get();
            } else {
                $data['placements'] = collect([]);
            }
            break;
            
        case 'supervisor':
            // For supervisors, show all placements they supervise (you may need to add supervisor relationship)
            $data['placements'] = \App\Models\Placement::with(['student.user'])
                ->orderBy('placement_date', 'desc')
                ->get();
            break;
            
        case 'admin':
            // For admins, show all placements
            $data['placements'] = \App\Models\Placement::with(['student.user'])
                ->orderBy('placement_date', 'desc')
                ->get();
            break;
            
        default:
            // For guests or unknown roles, show all (current behavior)
            $data['placements'] = \App\Models\Placement::with(['student.user'])
                ->orderBy('placement_date', 'desc')
                ->get();
    }
    
    return Inertia::render('Dashboard', $data);
})->name('dashboard');

require __DIR__.'/settings.php';


Route::apiResource('user', UserController::class);
Route::apiResource('student', StudentController::class);
Route::apiResource('placements', PlacementController::class);
Route::apiResource('feedback', FeedbackController::class);
Route::apiResource('absence', AbsenceController::class);
