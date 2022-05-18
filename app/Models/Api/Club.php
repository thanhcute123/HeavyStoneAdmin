<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    use HasFactory;
    protected $fillable = [
        'club_code',
        'club_name',
        'id_user',
        'president',
        'class',
        'email',
        'phone'
    ];
}
