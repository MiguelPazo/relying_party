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

    public function getData(Request $request)
    {
        $jResponse = [
            'data' => 'Zona Restringida'
        ];

        $token = $request->header('Authorization');

        dd($token);

        return response()->json($jResponse);
    }
}
