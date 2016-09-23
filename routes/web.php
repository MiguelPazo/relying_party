<?php

Route::get('/', 'HomeController@getIndex');

Route::group([
    'prefix' => '/admin'
], function () {
    Route::get('/', 'AdminController@getIndex');
    Route::get('/data', 'AdminController@getData');
});
