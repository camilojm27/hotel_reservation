<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Hotel extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'address', 'country', 'state','city', 'nit', 'phone'];

    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class);
    }
}
