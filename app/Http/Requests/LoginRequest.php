<?php

namespace App\Http\Requests;

use Dotenv\Validator;
use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email',
            'password' => 'required|string|min:8',
        ];
    }
    public function messages()
    {
        return [
            'email.required' => 'Bạn bắt buộc phải nhập Email',
            'email.email' => 'Email không đúng định dạng',
            'password.required' => 'Bạn bắt buộc phải nhập password',
            'password.string' => 'Mật khẩu sai',
            'password.min' => 'Mật khẩu sai'
        ];
    }
}
