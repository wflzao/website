<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $header = "From: ".$name." <".$email.">\r\n";

    $mailTo = "wafflestorage@protonmail.com";

    mail($mailTo, $subject, $message, $header)
    or die("Error!");
    
    echo"message sent"

?>