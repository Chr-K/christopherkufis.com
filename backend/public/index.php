<?php
require_once 'backend/app/router/router.php';
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/x-www-form-urlencoded');
session_start();

$router = new Router();
$router->addRoute('POST','/users/login',['controller' => 'backend/app/controllers/userController.php',
'action' => 'authenticate'
])

?>