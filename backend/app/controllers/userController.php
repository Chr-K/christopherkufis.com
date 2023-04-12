<?php
require_once('/var/www/html/christopherkufis.com/backend/app/controllers/controller.php');
class userController extends Controller{
    protected $usermodel;
    public function __construct()
    {
        parent::__construct();
        require_once('backend/app/models/userModel.php');
        $this->usermodel = new userModel();
    }

    public function authenticate(){
        $login = $this->usermodel->login($_POST['email'],$_POST['password']);
        echo json_encode($login);
    }

}

?>