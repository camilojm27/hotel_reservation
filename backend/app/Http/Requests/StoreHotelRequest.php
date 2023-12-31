<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreHotelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     * https://laravel.com/docs/10.x/validation#available-validation-rules
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255|unique:hotels',
            'address' => 'required|string|max:255|unique:hotels',
            'country' => 'required|string|max:255|',
            'state' => 'required|string|max:255|',
            'nit' => 'required|unique:hotels',
            'phone' => 'nullable|string|max:15',
        ];
    }
}
