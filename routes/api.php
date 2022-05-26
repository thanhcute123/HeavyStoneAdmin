<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\ChangePasswordController;
use App\Http\Controllers\ClubController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MajorController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//Api thao tác với user
Route::get('/user/getAll', [UserController::class, 'getAll'])->name('getAll');
Route::get('/user/getCount', [UserController::class, 'getCount'])->name('getCount');
Route::get('/user/{id}', [UserController::class, 'getId'])->name('getId');
Route::post('/user/create', [UserController::class, 'create'])->name('create');
Route::put('/user/update/{id}', [UserController::class, 'update'])->name('update');
Route::delete('/user/delete/{id}', [UserController::class, 'delete'])->name('delete');
Route::get('/user/search/{name}', [UserController::class, 'search'])->name('search');

//Api thao tác với bài đăng
Route::get('/post/getAll', [PostController::class, 'getAll'])->name('getAll');
Route::get('/post/getCount', [PostController::class, 'getCount'])->name('getCount');
Route::get('/post/getCountRequest', [PostController::class, 'getCountRequest'])->name('getCountRequest');
Route::post('/post/getCountDay', [PostController::class, 'getCountDay'])->name('getCountDay');
Route::get('/post/{id}', [PostController::class, 'getId'])->name('getId');
Route::post('/post/create', [PostController::class, 'create'])->name('create');
Route::post('/post/createPostClub', [PostController::class, 'createPostClub'])->name('createPostClub');

Route::put('/post/update/{id}', [PostController::class, 'update'])->name('update');
Route::delete('/post/delete/{id}', [PostController::class, 'delete'])->name('delete');
Route::get('/post/search/{name}', [PostController::class, 'search'])->name('search');

//Api thao tác với tài khoản
Route::get('/account/getAll', [AccountController::class, 'getAll'])->name('getAll');
Route::get('/account/{id}', [AccountController::class, 'getId'])->name('getId');
Route::post('/account/create', [AccountController::class, 'create'])->name('create');
Route::put('/account/update/{id}', [AccountController::class, 'update'])->name('update');
Route::delete('/account/delete/{id}', [AccountController::class, 'delete'])->name('delete');
Route::get('/account/search/{name}', [AccountController::class, 'search'])->name('search');
Route::get('/account/resetPassword/{id}', [AccountController::class, 'resetPassword'])->name('resetPassword');
//
////Api thao tác với chức năng bình luận
//Route::get('/comment/getAll', [CommentController::class, 'getAll'])->name('getAll');
//Route::post('/comment/create', [CommentController::class, 'create'])->name('create');
//Route::put('/comment/update/{id}', [CommentController::class, 'update'])->name('update');
//Route::delete('/comment/delete/{id}', [CommentController::class, 'delete'])->name('delete');

//Api thao tác với thông báo
Route::get('/notification/getAll', [NotificationController::class, 'getAll'])->name('getAll');
Route::get('/notification/{id}', [NotificationController::class, 'getId'])->name('getId');
Route::post('/notification/create', [NotificationController::class, 'create'])->name('create');
Route::put('/notification/update/{id}', [NotificationController::class, 'update'])->name('update');
Route::delete('/notification/delete/{id}', [NotificationController::class, 'delete'])->name('delete');
Route::get('/notification/search/{name}', [NotificationController::class, 'search'])->name('search');

//Api lấy danh sách các khoa
Route::get('/department/getAll', [DepartmentController::class, 'getAll'])->name('getAll');
Route::get('/department/{id}', [DepartmentController::class, 'getId'])->name('getId');

//Api thao tác với câu lạc bộ
Route::get('/club/getAll', [ClubController::class, 'getAll'])->name('getAll');
Route::get('/club/{id}', [ClubController::class, 'getId'])->name('getId');
Route::post('/club/create', [ClubController::class, 'create'])->name('create');
Route::put('/club/update/{id}', [ClubController::class, 'update'])->name('update');
Route::delete('/club/delete/{id}', [ClubController::class, 'delete'])->name('delete');
Route::get('/club/search/{name}', [ClubController::class, 'search'])->name('search');

//Api thao tác với tài liệu
Route::get('/document/getAll', [DocumentController::class, 'getAll'])->name('getAll');
Route::get('/document/getCount', [DocumentController::class, 'getCount'])->name('getCount');

//Api thao tác với ngành học
Route::get('/major/getAll', [MajorController::class, 'getAll'])->name('getAll');

//Api đăng nhập
Route::post('/admin/login', [LoginController::class, 'onLogin'])->name('admin.login');

//Api đổi mật khẩu
Route::post('/admin/changepassword/{id}', [ChangePasswordController::class, 'changepassword'])->name('admin.changepassword');

//Api upload avatar
Route::post('/admin/upLoadAvatar/{id}', [UserController::class, 'upLoadAvatar'])->name('upLoadAvatar');

//Api thao tác với tin nhắn
Route::get('/message/getId/{id}', [MessageController::class, 'getId'])->name('getId');
Route::post('/message/create', [MessageController::class, 'create'])->name('create');
Route::put('/message/update', [MessageController::class, 'update'])->name('update');
