<?php

namespace App\Http\Controllers;

use App\Models\Api\Department;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
        $department = Department::get();
        return response()->json($department);
    }
    public function getId($id)
    {
        $department = Department::findOrFail($id);
        if (isset($id))
        {
            return Response()->json($department);
        }
        else
        {
            return Response()->json("Id không tồn tại");
        }
    }
}
