<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Api\User;
use http\Env\Response;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
//        $user = User::simplePaginate(5);
        $user = User::whereNull('status')->get();
        return response()->json($user);
    }
    public function getCount()
    {
        $count = User::whereNull('status')->count();
        return response()->json($count);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Api\User $user
     * @return \Illuminate\Http\Response
     */
    public function getId($id)
    {
        $user = User::findOrFail($id);
        if (isset($id))
        {
            return Response()->json($user);
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
        $user = User::create($request->all());
        return response()->json($user);
    }

    public function search($name)
    {
        $result = Task::where('id_user', 'LIKE', '%'. $name. '%')->orWhere('username', 'LIKE', '%'. $name. '%')->get();
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
     * @param  \App\Models\Api\User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());
        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Api\User $user
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update([
            $request->all(),
            'status' => 'Đã xóa'
        ]);
        return response()->json($user);
    }
}
