<?php

namespace App\Services\User\Events;

use Znerg\Inception\Events\Event;

class UserCreatedEvent extends Event
{
    public $entity;
}