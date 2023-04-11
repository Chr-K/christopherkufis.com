<?php
require_once 'backend/app/router/router.php';

session_start();

$router = new Router();
$router->addRoute('POST','/users/login',['controller' => 'backend/app/controllers/userController.php',
'action' => 'authenticate'
])

?>