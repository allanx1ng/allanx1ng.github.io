<?php
$name = $_POST['name'];
$email_subject = $_POST['subject'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'allanxing2003@gmail.com';

$email_body = "Name: $name.\n".
                "Email $visitor_email.\n".
                    "Message: $message.\n";

$to =  "allanxing2003@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: ../pages/index.js");




?>