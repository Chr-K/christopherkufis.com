<?php

function newUser($email,$password){
require './REDACTED/query.php';
$hasword = password_hash($password,PASSWORD_DEFAULT);
$stmt = $mysqli->prepare('INSERT INTO users (email, password) VALUES (?,?)');
$stmt->bind_param('ss',$email,$hasword);
$stmt->execute();
}

?>