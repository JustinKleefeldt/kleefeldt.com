<?php
  require_once(__DIR__ . '/config.php');

  if($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact.kleefeldt.com@gmail.com";
    
    $firstName = htmlspecialchars($_POST["first-name"]);
    $lastName = htmlspecialchars($_POST["last-name"]);
    $email = htmlspecialchars($_POST["email"]);
    $company = htmlspecialchars($_POST["company"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);
    
    $headers = array(
      'From' => "justin@kleefeldt.com",
      'Reply-To' => $email,
      'X-Mailer' => 'PHP/' . phpversion()
    );

    $body = "
      ~ Contact message from kleefeldt.com ~\r\n
      - Contact Infos -\r\n
        \t> Name: {$lastName}, {$firstName}
        \t> E-Mail: {$email}
        \t> Company: {$company}\r\n
      Message:\r\n" . wordwrap($message, 70, "\r\n");

    // Google reCAPTCHA v2 Implementierung
    $secret = $recaptcha_secret;
    $response = $_POST["g-recaptcha-response"];
    $verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
    $captcha_success = json_decode($verify);

    if(!$captcha_success->success) {
      die("CAPTCHA failed!");
    }

    if (mail($to, $subject, $body, $headers)) {
      echo "Thank you, your mail was send.";
    } else {
      echo "There was a problem sending your mail, please try again later.";
    }
  }
?>