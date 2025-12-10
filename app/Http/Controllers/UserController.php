<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use App\Enums\userRole;
use Illuminate\Validation\Rules\Enum;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::paginate(20);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'first_name' => 'required|string|max:25',
            'last_name'  => 'required|string|max:25',
            'email'      => 'required|email|unique:users,email',
            'password'   => 'required|string|min:8',
            'role'             => ['required', new Enum(UserRole::class)],

        ]);
        $data['password']=bcrypt($data['password']);
        $user = User::create($data);

        return response()->json($user, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return $user;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'first_name' => 'sometimes|string|max:25',
            'last_name'  => 'sometimes|string|max:25',
            'email'      => 'sometimes|email|unique:users,email,' . $user->id,
            'password'   => 'sometimes|string|min:8',
            'role'             => ['sometimes', new Enum(userRole::class)],
        ]);
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }

        $user->update($data);

        return response()->json($user->refresh());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user -> delete($user);
        return response()->json('User deleted successfully',204);
    }
}
