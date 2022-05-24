<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Api\Account;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ChangePasswordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function changepassword(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|string|min:8',
            'password_new' => 'required|string|min:8|confirmed|different:password',

        ], [
            'required' => 'Trường :attribute bắt buộc nhập.',
            'password.string' => 'Sai mật khẩu',
            'password.min' => 'Sai mật khẩu',
            'password_new.string' => 'Mật khẩu phải là kiểu chuỗi',
            'password_new.min' => 'Mật khẩu phải có độ dài ít nhất 8 kí tự',
            'password_new.different' => 'Mật khẩu mới không được trùng với mật khẩu cũ',
            'password_new.confirmed' => 'Mật khẩu không khớp'
        ]);
        $errors = $validator->errors();

        if ($validator->fails()) {
            return Response()->json(array("status" => false, "error" => $errors));
        } else {
            $user = Account::findOrFail($id)
                ->where("password", md5($request->password))
                ->where('role', '=', '1')
                ->update([
                    "password" => md5($request->password_new)
                ]);
            if (!$user) {
                return response()->json(array("status" => true, "data" => "Mật khẩu không đúng!"));
            } else {
                return Response()->json(array("status" => true, "data" => "Đổi mật khẩu thành công!"));
            }
        }
    }
}
