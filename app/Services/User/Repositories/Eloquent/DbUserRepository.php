<?php

namespace App\Services\User\Repositories\Eloquent;

use Znerg\Inception\Repositories\BaseRepositoryInterface;
use Znerg\Inception\Repositories\Eloquent\DbBaseRepository;
use App\Services\User\Repositories\UserRepositoryInterface;


/**
 * Class DbUserRepository
 * @package Inception\Repositories\Eloquent
 */
class DbUserRepository extends DbBaseRepository implements BaseRepositoryInterface, UserRepositoryInterface
{
    /**
     * Set Product model's class name so that we can use
     * BaseRepository's common methods (created, all, find etc.)
     * @var string
     */
    protected $modelClassName = 'App\Services\User\Models\User';

}