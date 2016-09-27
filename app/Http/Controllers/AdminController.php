<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
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

    public function getLogout(Request $request)
    {
        $jResponse = [
            'url' => url('/')
        ];

        $token = $request->header('Authorization');

        if ($token) {
            $token = trim(str_replace(['Bearer', '"'], ['', ''], $token));
            $client = new Client();
            $client->setDefaultOption('verify', false);

            $client->get(env('IDP_URL') . "/token/logout/?token=$token", [])->json();
        }

        return response()->json($jResponse);
    }
}
