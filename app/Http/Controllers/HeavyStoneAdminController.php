<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HeavyStoneAdminController extends Controller
{
    public function __invoke()
    {
        return view('heavy-stone-admin');
    }
}
