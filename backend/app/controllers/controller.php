<?php
class Controller{
    protected $model;
    
    public function __construct()
    {
        require_once 'backend/app/models/model.php';
        $this->model = new Model();

    }


}



?>