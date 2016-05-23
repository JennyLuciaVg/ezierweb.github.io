<?php

namespace App\Services\User\Events;

use Znerg\Inception\Events\Event;

class UserDeletedEvent extends Event
{
    public $entity;
}