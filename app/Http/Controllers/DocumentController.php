<?php

namespace App\Http\Controllers;

use App\Models\Api\Document;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
        $document = Document::get();
        return response()->json($document);
    }
    public function getCount()
    {
        $document = Document::count();
        return response()->json($document);
    }
}
