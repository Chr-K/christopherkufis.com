<?php


class Model{
    protected $mysqli;
    public function __construct()
    {
        require_once 'backend/app/config/db.php';
        $this->mysqli =  $mysqli;
    }
}


?>