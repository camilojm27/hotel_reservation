<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreHotelRequest;
use App\Http\Requests\UpdateHotelRequest;
use App\Models\Hotel;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Illuminate\Http\JsonResponse
    {
        $hotels = Hotel::all();
        return response()->json($hotels);
    }


    /**
     * Store a newly created resource in storage.
     *
     */
    public function store(StoreHotelRequest $request)
    {
        $validated = $request->validated();
        $hotel = new Hotel();
        $hotel->fill($validated);
        $hotel->save();
        return response($hotel->toJson(), ResponseAlias::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $post = Hotel::first();

        // Return the post as a JSON response
        return response()->json($post, ResponseAlias::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHotelRequest $request, Hotel $hotel)
    {
        // Validate the request data
        $validated = $request->validated();

        // Update the hotel with the request data
        $hotel->update($validated);

        // Return the updated hotel as a JSON response
        return response()->json($hotel, ResponseAlias::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Hotel $hotel)
    {
        $hotel->delete();

        return response()->json(['message' => 'Hotel deleted successfully'], ResponseAlias::HTTP_OK);
    }
}
