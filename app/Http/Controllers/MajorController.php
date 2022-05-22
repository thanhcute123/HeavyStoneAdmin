<?php

namespace App\Http\Controllers;

use App\Models\Api\Department;
use App\Models\Api\Major;

class MajorController extends Controller
{
    public function getAll()
    {
        $major = Major::get();
        return response()->json($major);
    }
}
