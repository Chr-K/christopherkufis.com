<?php
require_once 'backend/app/router/router.php';
require_once 'backend/app/controllers/userController.php';
session_start();

$router = new Router();
$router->addRoute('POST','asdfasdf/users/login',['userController' => 'backend/app/controllers/userController.php',
'action' => 'authenticate'
]);
?>