<?php
header("Content-Type: Multipart/form-data");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");


echo $_POST['email'];

/*
require_once 'backend/app/router/router.php';
require_once 'backend/app/controllers/userController.php';
session_start();

$router = new Router();
$router->addRoute('POST','/users/login',['userController' => '../backend/app/controllers/userController.php',
'action' => 'authenticate'
]);

 */
?>

