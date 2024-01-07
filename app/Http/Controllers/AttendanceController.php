<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAttendanceRequest;
use App\Http\Requests\UpdateAttendanceRequest;
use App\Models\Attendance;
use App\Models\Designation;
use App\Models\User;

use App\Services\PaginateService;
use Illuminate\Support\Facades\DB;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */



    public function index()
    {
        $paginate = new  PaginateService;
        $query = Attendance::query();
        return $paginate(request(), $query);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $executive = request('executive');
        $memberId = Designation::where('name', 'like', 'Member')->first();

        $users = User::when('roles', fn ($q) => $q->whereNot('id', 1));

        $users->orderBy('name', 'desc');
        return $users->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAttendanceRequest $request)
    {

        $request->validate(['attend_list' => 'required|array']);
        // $request->validate(['attend_list' => 'present|array']);
        try {
            DB::beginTransaction();
            $validated =  $request->validated();
            $attendance = Attendance::create($validated);

            $att_list_array = $request['attend_list'];

            $att_list  = collect($att_list_array)->pluck('id');

            $attendance->users()->attach($att_list);
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return response($th->getMessage(), 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Attendance $attendance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Attendance $attendance)
    {
        return response([
            'users' => User::all(),
            'attend_list' => $attendance->users,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAttendanceRequest $request, Attendance $attendance)
    {
        $request->validate(['attend_list' => 'required|array']);

        try {
            DB::beginTransaction();
            $validated =  $request->validated();

            $attendance->update($validated);
            $att_list_array = $request['attend_list'];

            $att_list  = collect($att_list_array)->pluck('id');

            $attendance->users()->sync($att_list);
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return response($th->getMessage(), 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Attendance $attendance)
    {
        $attendance->delete();
        return $this->index(request());
    }
}
