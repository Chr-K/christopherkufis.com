<?php

class userModel extends Model{


    public function login($email,$password){
        $stmt = $this->mysqli->prepare('SELECT password, id FROM users WHERE email = ?');
        $stmt->bind_param('s',$email);
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows()>0){
            $stmt->bind_result($real_password,$id);
            $stmt->fetch();

            if(password_verify($password,$real_password)){
                $_SESSION["user_id"] = $id;
                return($_SESSION["user_id"]);
            }
            else{
                http_response_code(400);
            }
        }

    }

}


?>