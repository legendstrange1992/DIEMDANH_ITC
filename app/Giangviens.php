<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;


class Giangviens extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'giangviens';
}
