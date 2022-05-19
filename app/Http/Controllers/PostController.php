<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Api\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    const STATUS_WAIT = 0;
    const STATUS_APPROVED = 1;
    const STATUS_DELETED = 2;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
//        $post = Post::simplePaginate(5);
        $post = Post::where('status', '=', self::STATUS_WAIT)->get();
        return response()->json($post);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Api\Post $post
     * @return \Illuminate\Http\Response
     */
    public function getId($id)
    {
        $post = Post::findOrFail($id);
        if (isset($id))
        {
            return Response()->json($post);
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
        $arr = $request->all();
        $faculty = $arr['faculty'];
        $major = $arr['major'];
        $tags = [
            'faculty' => $faculty,
            'major' => $major
        ];
        $post = Post::create([
            'id_user' => $arr['id_user'],
            'theme' => $arr['theme'],
            'content' => $arr['content'],
            'tags' => json_encode($tags)
        ]);
        return response()->json($post);
    }

    public function search($name)
    {
        $result = Post::where('id_user', 'LIKE', '%'. $name. '%')->orWhere('theme', 'LIKE', '%'. $name. '%')->get();
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
     * @param  \App\Models\Api\Post $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);
        $status = $request->get('status');
        if ($status == "1") {
            $post->update([
                'status' => SELF::STATUS_APPROVED
            ]);
        } else if ($status == "2"){
            $post->update([
                'status' => SELF::STATUS_DELETED
            ]);
        };

        return response()->json($post);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Api\Post $post
     * @return \Illuminate\Http\Response
     */
//    public function delete(Request $request, $id)
//    {
//        $post = Post::findOrFail($id);
//        $post->update([
//            'status' => self::STATUS_DELETED
//        ]);
//        return response()->json($post);
//    }
}
