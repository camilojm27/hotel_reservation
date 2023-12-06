<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hotel>
 */
class HotelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $location = random_int(0,3);
        $states = ['Valle del Cauca', 'Atlantico', 'Nariño','Cundinamarca'];
        $citys = ['Cali', 'Barranquilla', 'Pasto','Bogotá'];

        return [
            'name' => $this->faker->unique()->name,
            'address' => $this->faker->address,
            'country' => 'Colombia',
            'state' => $states[$location],
            'city' => $citys[$location],
            'nit' => $this->faker->randomNumber(9),
            'phone' => $this->faker->phoneNumber()
        ];
    }
}
