<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FaithPromise extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    public function members()
    {
        return $this->belongsToMany(User::class);
    }

    // public function details()
    // {
    //     return $this->hasMany(MemberPayment::class, 'payable_id', 'id');
    // }

    public function details()
    {
        return $this->morphMany(MemberPayment::class, 'payable');
    }
}
