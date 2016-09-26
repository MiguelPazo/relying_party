<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class AdminController extends Controller
{
    public function getIndex()
    {
        return view('admin');
    }

    public function getData()
    {
        $jResponse = [
            'data' => 'Zona Restringida'
        ];

        return response()->json($jResponse);
    }

    public function getLogout()
    {

    }
}
