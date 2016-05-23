<?php

namespace App\Services\User\Listener;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Znerg\Inception\Events\Event;
use Znerg\Inception\Listeners\Listener;
use Mail;

class UserCreatedListener extends Listener  implements ShouldQueue
{
    /*use InteractsWithQueue;*/

    public function handle(Event $event)
    {
        $user = $event->entity;

        Mail::send('emails.example', ['user' => $user], function ($message) use ($user){
            $message->to($user->email, $user->username)->subject('Welcome!');
        });
    }

}