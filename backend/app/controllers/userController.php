<?php
class userController extends Controller{
    protected $usermodel;
    public function __construct()
    {
        parent::__construct();
        require_once('backend/app/models/userModel.php');
        $this->usermodel = new userModel();
    }

    public function authenticate($email,$password){
        $email = $_POST['email'];
        $password = $_POST['password'];
        $login = $this->usermodel->login($email,$password);
        echo 'hi';
        return $login;
    }

}



?>