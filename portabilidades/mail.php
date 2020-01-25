<?php
$name = $_POST["name"];
$phone = $_POST["phone"];

$body = "Nombre: " . $name . "<br>Teléfono: " . $phone;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'mailer/Exception.php';
require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'julian.donsanto@w3americas.com';                     // SMTP username
    $mail->Password   = 'Lomas123';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('julian.donsanto@w3americas.com', $name);
    $mail->addAddress('julian.donsanto@w3americas.com', 'Receptor');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Haz recibido una nueva consulta de ' .$name;
    $mail->Body    = $body;
    $mail->AltBody = $body;
    $mail->CharSet = 'UTF-8';


    $mail->send();
    echo '
    <script>
    window.history.go(-1);
    </script>';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}