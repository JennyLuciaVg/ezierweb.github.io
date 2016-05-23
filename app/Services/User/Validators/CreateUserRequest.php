<?php

namespace App\Services\User\Validators;

use Znerg\Inception\Validators\Request;

class CreateUserRequest extends Request {

    /**
     * Get the validation rules that apply to the request.
     *
     * @param null $validationType
     * @return array
     */
	public function rules($validationType = null)
	{
        // @TODO password validation should be defined by Settings or config file
        switch ($validationType) {
            default:
                return [
                    'email'             =>  'required|email|max:64|unique:users,email',
                    'password'          =>  'required|min:6|max:20',
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
