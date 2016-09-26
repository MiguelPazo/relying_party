<?php

Route::get('/', 'HomeController@getIndex');
Route::get('/logout', 'AdminController@getLogout');
Route::get('/admin', 'AdminController@getIndex');

Route::group([
    'prefix' => '/admin',
    'middleware' => 'token'
], function () {
    Route::get('/data', 'AdminController@getData');
});
