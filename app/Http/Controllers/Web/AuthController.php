<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    public function showLogin(): Response
    {
        return Inertia::render('Auth/Login');
    }

    public function showRegister(): Response
    {
        return Inertia::render('Auth/Register');
    }

    public function store(Request $request): RedirectResponse
    {
        $token = $request->input('token');
        if ($token) {         
            $tokenModel = PersonalAccessToken::findToken($token);
            if ($tokenModel) {
                $user = $tokenModel->tokenable;  

                Auth::login($user);

                $request->session()->regenerate();

                if (!$user->hasVerifiedEmail()) {
                    return redirect()->route('verification.notice');
                }
                return redirect()->intended('/dashboard');
            }
        }

        return back()->withErrors([
            'email' => 'Invalid token provided.',
        ]);
    }
    
    public function destroy(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
