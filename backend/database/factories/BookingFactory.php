<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Hotel;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $arrived_date = $this->faker->date();
        $number_of_nights = random_int(1, 100);

        return [
            'client_id' => Client::find(1),
            'hotel_id' => Hotel::find(1),
            'number_of_people' => random_int(1, 10),
            'arrived_date' => $arrived_date,
            'number_of_nights' => $number_of_nights,
            'departure_date' => Carbon::parse($arrived_date)->addDays($number_of_nights),
            'price' => random_int(80, 99999999)
        ];
    }
}
