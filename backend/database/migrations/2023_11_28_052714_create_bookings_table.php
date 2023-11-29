<?php

use App\Models\Client;
use App\Models\Hotel;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * https://dev.mysql.com/doc/refman/8.0/en/numeric-type-syntax.html
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Client::class);
            $table->foreignIdFor(Hotel::class);
            $table->unsignedTinyInteger('number_of_people'); //Maximo valor 255
            $table->timestamp('arrived_date');
            $table->unsignedSmallInteger('number_of_nights');
            $table->timestamp('departure_date');
            $table->unsignedBigInteger('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
