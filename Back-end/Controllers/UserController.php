<?php
require('../christopherkufis.com/REDACTED/db.php');


function RegisterUser($email,$password){
include './Back-end/Service/isEmailUnique.php';
if(isEmailUnique($email)){
    #no other user has registered that email
    include './Back-end/Services/newuser.php';
    newUser($email,$password);
}
else{
    #email already being used
    http_response_code(406);
}

}


?>