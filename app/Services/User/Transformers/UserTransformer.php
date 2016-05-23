<?php

namespace App\Services\User\Transformers;

use App\Services\Role\Transformers\RoleTransformer;
use App\Services\RoleUser\Repositories\Eloquent\DbRoleUserRepository;
use App\Services\RoleUser\Transformers\RoleUserTransformer;
use App\Services\User\Models\User;
use Znerg\Inception\Transformers\BaseTransformer;

class UserTransformer extends BaseTransformer
{
    protected $availableIncludes = [
        'roleUser',
        'roles',
        'created_by_user',
        'updated_by_user',
    ];

    public function transform($user)
    {
        return [
            'id'                => $user->id,
            'name'              => $user->name,
            'email'             => $user->email,
            'created_at'        => $user->created_at ? $user->created_at->format('Y-m-d H:i:s') : null,
            'updated_at'        => $user->updated_at ? $user->updated_at->format('Y-m-d H:i:s') : null,
        ];
    }

    public function includeRoleUser(User $user)
    {
        $roleUser = \DB::table('role_user')
            ->join('roles', 'roles.id', '=', 'role_user.role_id')
            ->where('role_user.user_id', $user->id)
            ->get();

        return $this->collection($roleUser, new RoleUserTransformer());
    }

    public function includeRoles(User $user)
    {
        return $this->collection($user->roles()->get(), new RoleTransformer());
    }

    public function includeCreatedByUser(User $user)
    {
        $created_by = $user->created_by;

        $user = User::find($created_by);

        return $this->item($user, new UserTransformer());
    }

    public function includeUpdatedByUser(User $user)
    {
        $updated_by = $user->updated_by;

        $user = User::find($updated_by);

        return $this->item($user, new UserTransformer());
    }

}