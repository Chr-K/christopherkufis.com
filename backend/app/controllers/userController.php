<?php
class userController extends Controller{
    protected $usermodel;
    public function __construct()
    {
        parent::__construct();
        require_once('backend/app/models/userModel.php');
        $this->usermodel = new userModel();
        echo json_encode('hi');
    }

    public function authenticate($email,$password){
        $email = $_POST['email'];
        $password = $_POST['password'];
        $login = $this->usermodel->login($email,$password);
        echo json_encode($login);
    }

}



?>