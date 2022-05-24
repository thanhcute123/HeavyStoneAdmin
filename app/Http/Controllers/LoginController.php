<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
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

<<<<<<< HEAD


=======
>>>>>>> 679876a022b20d783b42aa1f4ae1885a851312fa
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
<<<<<<< HEAD
        $user = Account::where("email", $request->email)
            ->where("password", md5($request->password))
            ->where('role', '=', '1')->get();
        if ($validator->fails()) {
            return response()->json(["error" => $errors], '401');
//            return $this->outputJSON($this->setErrors('Lỗi',$errors,422)->toArray());
//            return redirect()->back()->withErrors($errors,)->withInput();
        } else {

            if ($user->count() > 0) {
                return Response()->json(array("success" => 1, "data" => $user[0]));
//                return $this->outputJSON($this->setSuccess($user[0])->toArray());
            }

            return response()->json("Đăng nhập không thành công!", 401);

=======
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
>>>>>>> 679876a022b20d783b42aa1f4ae1885a851312fa
        }
    }
}

