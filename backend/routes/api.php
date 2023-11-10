<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\CategoriaController;

Route::get('produtos', [ProdutoController::class, 'index']);
Route::get('produtos/{id}', [ProdutoController::class, 'show']);
Route::post('produtos', [ProdutoController::class, 'store']);
Route::put('produtos/{id}', [ProdutoController::class, 'update']);
Route::delete('produtos/{id}', [ProdutoController::class, 'destroy']);

Route::get('categorias', [CategoriaController::class, 'index']);
Route::get('categorias/{id}', [CategoriaController::class, 'show']);
Route::post('categorias', [CategoriaController::class, 'store']);
Route::put('categorias/{id}', [CategoriaController::class, 'update']);
Route::delete('categorias/{id}', [CategoriaController::class, 'destroy']);



