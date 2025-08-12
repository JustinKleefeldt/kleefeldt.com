<?php
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

    if (mail($to, $subject, $body, $headers)) {
      echo "Thank you, your mail was send.";
    } else {
      echo "There was a problem sending your mail, please try again later.";
    }
  }
?>