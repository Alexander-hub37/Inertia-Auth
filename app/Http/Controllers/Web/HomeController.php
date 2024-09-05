<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'user' => Auth::user(),
        ]);
    }
}
