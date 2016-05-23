<?php

namespace App\Services\User\Events;

use Znerg\Inception\Events\Event;

class UserUpdatedEvent extends Event
{
    public $entity;
}