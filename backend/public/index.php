<?php
header("Content-Type: multipart/form-data");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
set_include_path(get_include_path() . PATH_SEPARATOR . '/var/www/html/christopherkufis.com/backend');
require_once '/var/www/html/christopherkufis.com/backend/app/router/router.php';
require_once '/var/www/html/christopherkufis.com/backend/app/controllers/userController.php';
session_start();

$router = new Router();
$router->addRoute('POST', '/users/login', [
    'controller' => 'userController',
    'action' => 'authenticate'
  ]);
$router->handleRequest();
?>

