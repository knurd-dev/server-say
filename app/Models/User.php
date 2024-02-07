<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\SoftDeletes;

// use Illuminate\Foundation\Auth\User as Authenticatable;
use MongoDB\Laravel\Auth\User as Authenticatable;

use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use MongoDB\Laravel\Eloquent\SoftDeletes;
use OwenIt\Auditing\Auditable as AuditingAuditable;
use OwenIt\Auditing\Contracts\Auditable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
// implements Auditable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, SoftDeletes;
    // , AuditingAuditable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $connection = 'mongodb';
    protected $guarded = ['id'];
    // protected $collection = 'users';

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // public function designations()
    // {
    //     return $this->belongsToMany(Designation::class, 'designation_user', 'user_id', 'designation_id');
    // }

    public function designations()
    {
        return $this->belongsToMany(Designation::class, 'designation_user', 'user_ids', 'designation_ids');
    }

    public function faith_promises()
    {
        $this->belongsToMany(FaithPromise::class);
    }

    public function faith_promise_payments()
    {
        return $this->hasMany(FaithPromisePayment::class);
    }
}
