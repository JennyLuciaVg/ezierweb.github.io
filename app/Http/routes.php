<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['oauth'], 'prefix' => 'api'], function () {
    /*
     * User routes
     */
    Route::get('users', ['uses' => 'API\UsersController@index']);

    Route::get('users/{id}', ['uses' => 'API\UsersController@show']);

    Route::post('users', ['uses' => 'API\UsersController@store']);

    Route::patch('users/{id}', ['uses' => 'API\UsersController@update']);

    Route::put('users/{id}', ['uses' => 'API\UsersController@update']);

    Route::delete('users/{id}', ['uses' => 'API\UsersController@destroy']);
});
