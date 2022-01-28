<?php

if (isset($_POST['btn'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "wafflestorage@protonmail.com"
    $headers = "From ".$mailFrom;
    $txt = "You have received an e-mail from ".$name."":".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Locaton: index.html?mailsend")
}