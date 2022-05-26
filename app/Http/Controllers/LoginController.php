<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\AdminResource;
use App\Models\Api\Account;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new AdminResource(Account::all());
    }

    public function onLogin(Request $request){
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'password' => 'required|string|min:8'

        ], [
            'required' => 'Trường :attribute bắt buộc nhập.',
            'email'    => 'Trường :attribute phải có định dạng email',
            'password.string' => 'Sai mật khẩu',
            'password.min' => 'Sai mật khẩu'
        ]);
        $errors = $validator->errors();
        if ($validator->fails()) {
            return Response()->json(array("error" => $errors));
        } else {
            $user = Account::where("email", $request->email)
                ->where("password", md5($request->password))
                ->where('role', '=', '1')->get();
            if ($user->count() > 0) {
                return Response()->json(array("status" => true, "data" => $user[0]));
            }
            return response()->json(array("status" => false, "error" => "Email hoặc mật khẩu không đúng!"));
        }
    }
}


