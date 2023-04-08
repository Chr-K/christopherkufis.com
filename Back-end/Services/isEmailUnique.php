<?php
function isEmailUnique($email){
require './REDACTED/query.php';
$stmt = $mysqli->prepare('SELECT * FROM users WHERE email = ?');
$stmt-> bind_param('s',$email);
$stmt->execute();
$stmt->store_result();
#checks to see if any users exist with entered email address
if($stmt->num_rows()>0){
    http_response_code(406);
    return(false);
}
else{
    http_response_code(200);
    return(true);
}
}




?>