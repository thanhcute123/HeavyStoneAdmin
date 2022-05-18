<?php

namespace App\Http\Controllers;

use App\Models\Api\Account;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
        $account = Account::simplePaginate(10);
        return response()->json($account);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Api\Account $account
     * @return \Illuminate\Http\Response
     */
    public function getId($id)
    {
        $account = Account::findOrFail($id);
        if (isset($id))
        {
            return Response()->json($account);
        }
        else
        {
            return Response()->json("Id không tồn tại");
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $account = Account::create([
            'id_user' => $request->get('id_user'),
            'email' => $request->get('email'),
            'password' => md5($request->get('password'))
        ]);
        return response()->json($account);
    }

    public function search($name)
    {
        $result = Account::where('id_user', 'LIKE', '%'. $name. '%')->orWhere('email', 'LIKE', '%'. $name. '%')->get();
        if(count($result)){
            return Response()->json($result);
        }
        else
        {
            return response()->json(['Result' => 'No Data not found'], 404);
        }
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Api\Account $account
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $account = Account::findOrFail($id);
        $account->update(['password' => md5($request->get('password'))]);
        return response()->json($account);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Api\Account $account
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request, $id)
    {
        $account = Account::destroy($id);
        return response()->json("Đã xóa thành công");
    }
}
