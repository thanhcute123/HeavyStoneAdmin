<?php

namespace App\Http\Controllers;

use App\Models\Api\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
        $notification = Notification::simplePaginate(5);
        return response()->json($notification);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Api\Notification $notification
     * @return \Illuminate\Http\Response
     */
    public function getId($id)
    {
        $notification = Notification::findOrFail($id);
        if (isset($id))
        {
            return Response()->json($notification);
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
        $notification = Notification::create($request->all());
        return response()->json($notification);
    }

    public function search($name)
    {
        $result = Notification::where('theme', 'LIKE', '%'. $name. '%')->orWhere('content', 'LIKE', '%'. $name. '%')->get();
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
     * @param  \App\Models\Api\Notification $notification
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $notification = Notification::findOrFail($id);
        $notification->update($request->all());
        return response()->json($notification);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Api\Notification $notification
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request, $id)
    {
        $notification = Notification::destroy($id);
        return response()->json("Đã xóa thành công");
    }
}
