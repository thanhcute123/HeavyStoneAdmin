<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_user',
        'username',
        'sex',
        'phone',
        'avatar',
        'id_department',
        'club',
        'status'
    ];
}
