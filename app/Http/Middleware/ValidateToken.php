<?php

namespace App\Http\Middleware;

use Closure;
use GuzzleHttp\Client;

class ValidateToken
{
    public function handle($request, Closure $next)
    {
        $token = $request->header('Authorization');

        if ($token) {
            $token = trim(str_replace(['Bearer', '"'], ['', ''], $token));
            $client = new Client();
            $client->setDefaultOption('verify', false);

            $response = $client->get(env('IDP_URL') . "token/validate/?token=$token", [])->json();

            if ($response['success']) {
                return $next($request);
            }
        }

        abort(401);
    }
}
