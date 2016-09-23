<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Routing\Route;

class HomeController extends Controller
{
    public function getIndex()
    {
        return view('home');
    }
}
