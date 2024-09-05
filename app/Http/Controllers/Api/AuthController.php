<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;



class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $validatedData = $request->validated();
        $validatedData['password'] = Hash::make($validatedData['password']);

        $user = User::create($validatedData);

        event(new Registered($user));

        if (Auth::attempt(['email' => $validatedData['email'], 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('Personal Access Token')->plainTextToken;

            if (!$user->hasVerifiedEmail()) {
                return response()->json([
                    'message' => 'Please verify your email before logging in.',
                    'data' => [
                        'user' => $user,
                        'token' => $token,
                    ],
                ], 200);
            }

            return response()->json([
                'message' => 'Registration and login successful',
                'data' => [
                    'user' => $user,
                    'token' => $token,
                ],
            ], 200);
        }

        return response()->json([
            'message' => 'Registration successful, but login failed. Please try to login manually.',
        ], 401);
    }


    public function login(LoginRequest $request)
    {
        $validatedData = $request->validated();

        if (Auth::attempt($validatedData)) {
            $user = Auth::user();
            $token = $user->createToken('Personal Access Token')->plainTextToken;
            
            if (!$user->hasVerifiedEmail()) {
                return response()->json([
                    'message' => 'Please verify your email before logging in.',
                    'data' => [
                        'user' => $user,
                        'token' => $token,
                    ],
                ], 200);
            }

            return response()->json([
                'message' => 'Login successful',
                'data' => [
                    'user' => $user,
                    'token' => $token,
                ],
            ], 200);
        }

        return response()->json([
            'message' => 'Invalid credentials',
        ], 401);
    }


    public function logout(Request $request)
    {
        $user = Auth::user();
        $user->tokens()->delete();

        return response()->json([
            'message' => 'Logout successful',
        ]);
    }
}
