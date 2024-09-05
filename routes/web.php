<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Web\AuthController;
use App\Http\Controllers\Web\HomeController;
use Inertia\Inertia;
use App\Http\Middleware\RedirectIfVerified;

Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return redirect()->route('login');
    });
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'store'])->name('login.store');
    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'store'])->name('register.store');
});


Route::post('/logout', [AuthController::class, 'destroy'])->name('logout')->middleware('auth');
Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard')->middleware(['auth', 'verified']);

Route::get('/email/verify', function () {
    return Inertia::render('Auth/VerifyEmail');
})->name('verification.notice')->middleware(['auth', RedirectIfVerified::class]);


Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect('/dashboard');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');
