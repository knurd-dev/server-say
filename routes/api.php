<?php

use App\Http\Controllers\Api\AuditController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\LogoutController;
use App\Http\Controllers\Api\PagesController;
use App\Http\Controllers\Api\PermissionsController;
use App\Http\Controllers\Api\RolesController;
use App\Http\Controllers\Api\RoutesController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\AppController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DesignationController;
use App\Http\Controllers\FaithPromiseController;
use App\Http\Middleware\CheckAcl;
use App\Models\Designation;
use App\Models\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/sanctum/csrf-cookie', function () {
    return response('ok', 200);
})->name('app.csrf-cookie');

Route::post('/auth/login', AuthController::class)->name('auth.login');
Route::get('/app/settings', AppController::class)->name('app.settings');
Route::post('/auth/logout', LogoutController::class)->name('auth.logout');
Route::resource('attendances', AttendanceController::class);
Route::patch('attendances/{attendance}/collection', [AttendanceController::class, 'update_collection']);
Route::get('summary', DashboardController::class);
Route::resource('designations', DesignationController::class);
Route::get('update-members', function () {
    $users = User::all();
    foreach ($users as $user) {
        $user->designations()->sync([8]);
    }
});
Route::group([
    'middleware' => ['auth:sanctum']
    // 'middleware' => ['auth:sanctum', CheckAcl::class]
], function () {
    Route::get('/auth/user', [AuthController::class, 'getUser'])->name('auth.user');
    Route::apiResource('users', UserController::class);
    // Route::resource('attendances', AttendanceController::class);

    Route::resource('faith-promises', FaithPromiseController::class);
    Route::group([
        'prefix' => 'pages',
        'middleware' => ['can:view pages, manage pages']
    ], function () {
        Route::get('{page}', [PagesController::class, 'show'])->name('pages.show');
        Route::get('{params?}', [PagesController::class, 'index'])->name('pages.index');
        Route::post('', [PagesController::class, 'store'])->name('pages.store');
        Route::put('{page}', [PagesController::class, 'update'])->name('pages.update');
        Route::delete('{page}', [PagesController::class, 'destroy'])->name('pages.destroy');
    });

    Route::group([
        'prefix' => 'roles',
        'middleware' => [
            'can:view roles, manage roles'
        ],
    ], function () {
        Route::get('all', [RolesController::class, 'all'])->name('roles.all');
        Route::get('{role}', [RolesController::class, 'show'])->name('roles.show');
        Route::get('{params?}', [RolesController::class, 'paginate'])->name('roles.paginate');
        Route::post('', [RolesController::class, 'store'])->name('roles.store');
        Route::put('{role}', [RolesController::class, 'update'])->name('roles.update');
        Route::delete('{role}', [RolesController::class, 'destroy'])->name('roles.destroy');
    });

    Route::group([
        'prefix' => 'permissions',
        'middleware' => [
            'can:view permissions, manage permissions'
        ],
    ], function () {
        Route::get('all', [PermissionsController::class, 'all'])->name('permissions.all');
        Route::get('{permission}', [PermissionsController::class, 'show'])->name('permissions.show');
        Route::get('{params?}', [PermissionsController::class, 'paginate'])->name('permissions.paginate');
        Route::post('', [PermissionsController::class, 'store'])->name('permissions.store');
        Route::post('mappings', [PermissionsController::class, 'resourceMappings'])->name('permissions.mappings');
        Route::put('{permission}', [PermissionsController::class, 'update'])->name('permissions.update');
        Route::delete('{permission}', [PermissionsController::class, 'destroy'])->name('permissions.destroy');
    });

    Route::group([
        'prefix' => 'acl',
    ], function () {
        Route::get('routes', [RoutesController::class, 'all'])->name('acl.routes');
        Route::get('permission-routes/{permissionId}', [RoutesController::class, 'getPermissionRoutes'])->name('acl.permission-routes');
        Route::post('permission-routes/{permissionId}', [RoutesController::class, 'updatePermissionRoutes'])->name('acl.update-permission-routes');
        Route::post('update-access-controls/{user}', [UserController::class, 'updateAccessControls'])->name('acl.update-access-controls');
    });

    Route::group([
        'prefix' => 'audits',
        'middleware' => ['can:view audits']
    ], function () {
        Route::get('{audit}', [AuditController::class, 'show'])->name('audits.show');
        Route::get('{params?}', [AuditController::class, 'index'])->name('audits.index');
    });
});
