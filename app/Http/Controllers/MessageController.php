<?php

namespace App\Http\Controllers;

use App\Models\Api\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Api\Message $message
     * @return \Illuminate\Http\Response
     */
    public function getId($id)
    {
        $message = Message::findOrFail($id);
        if (isset($id))
        {
            return Response()->json($message);
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
        $message = Message::create([
            'id_user' => $request->get('id_user'),
            'username' => $request->get('username'),
            'email' => $request->get('email'),
            'message' => $request->get('mesage'),
            'status' => "1"
        ]);
        return response()->json($message);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Api\Message $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $message = Message::findOrFail($id);
        $message->update(['status' => "0"]);
        return response()->json($message);
    }
}
