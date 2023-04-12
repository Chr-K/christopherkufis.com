<?php
header("Content-Type: multipart/form-data");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

require_once '/var/www/html/christopherkufis.com/backend/app/router/router.php';
require_once '/var/www/html/christopherkufis.com/backend/app/controllers/userController.php';
session_start();

$router = new Router();
$router->addRoute('POST','/users/login',['controller' => 'backend/app/userController.php',
'action' => 'authenticate'
]);
echo json_encode('hi');
$router->handleRequest();
?>

