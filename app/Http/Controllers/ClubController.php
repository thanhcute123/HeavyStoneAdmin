<?php

namespace App\Http\Controllers;

use App\Models\Api\Club;
use Illuminate\Http\Request;

class ClubController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
        $club = Club::simplePaginate(5);
        return response()->json($club);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Api\Club $club
     * @return \Illuminate\Http\Response
     */
    public function getId($id)
    {
        $club = Club::findOrFail($id);
        if (isset($id))
        {
            return Response()->json($club);
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
        $club = Club::create($request->all());
        return response()->json($club);
    }

    public function search($name)
    {
        $result = Club::where('club_code', 'LIKE', '%'. $name. '%')->orWhere('club_name', 'LIKE', '%'. $name. '%')->get();
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
     * @param  \App\Models\Api\Club $club
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $club = Club::findOrFail($id);
        $club->update($request->all());
        return response()->json($club);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Api\Club $club
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request, $id)
    {
        $club = Club::destroy($id);
        return response()->json("Đã xóa thành công");
    }
}
