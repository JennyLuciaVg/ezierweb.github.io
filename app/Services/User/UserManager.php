<?php

namespace App\Services\User;

use Znerg\Inception\Helpers\GlobalFunctions;
use Znerg\Inception\Services\BaseManager;

class UserManager extends BaseManager {

    /**
     * Example createdEvent customized
     * @param string $type
     * @param $entity
     */
    public function fireEvent($type, $entity)
    {
        if ($type === 'createdEvent') {
            $this->$type = GlobalFunctions::getInstanceFromName($this->{$type.'Name'});
            if ($this->$type) {
                $custom_params = [
                    'entity'      => $entity,
                    'my_property' => 'My property',
                    //...add more parameters
                ];
                event($this->$type->setParams($custom_params));
            }
        } else {
            parent::fireEvent($type, $entity);
        }
    }
} 