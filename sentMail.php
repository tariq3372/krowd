<?php
if(isset($_POST[`submit`])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = "From";
    $message = "Message";
    $recipient = "almadares25@gmail.com";
    $mailheader = "Test Test";
    mail($recipient, $subject, $message, $mailheader);
    or die("Error!");

    echo"message send"
}

?>