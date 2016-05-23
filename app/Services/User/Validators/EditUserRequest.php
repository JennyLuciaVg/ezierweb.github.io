<?php

namespace App\Services\User\Validators;

use Znerg\Inception\Validators\Request;

class EditUserRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @param $validationType
     * @return array
     */
    public function rules($validationType = null)
    {
        $user_id = app('router')->current()->getParameter('id');

        switch ($validationType) {
            default:
                return [
                    'email'             =>  'email|max:64|unique:users,email,'.$user_id,
                    'password'          =>  'min:6|max:20',
                    'number_tries'      =>  'integer',
                ];
        }
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

}
