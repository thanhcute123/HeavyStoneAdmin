<?php

namespace App\Http\Controllers;

use Company\MVC\Json;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

//    protected function outputJSON($data)
//    {
//        $this->resp->header('Content-Type', 'application/json');
//        if ($data instanceof \Result) {
//            return $this->resp->setBody(Json::encode($data->toArray()));
//        }
//
//        $this->resp->setBody(Json::encode($data));
//    }
}
