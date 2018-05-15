<?php

$formName = $_POST['name'];
$formEmail = $_POST['email'];
$formMessage = $_POST['message'];

//Validate first
if(empty($formName)) {
    $message ="Name is mandatory!";
    $success = false;
}
else if(empty($formEmail)) {
  $message ="Email is mandatory!";
  $success = false;  
}
else if(IsInjected($formEmail)) {
    $message = "Bad email value!";
    $success = false;
}
else{
  $message = "Thanks for the submission!";
  $success = true;
}

$response = array(
  'success' => $success,
  'message' => $message
);

if($success) {
  $email_from = 'belgrade-nightlife.com';//<== update the email address
  $email_subject = "Email sa sajta";
  $email_body = "Od: $formName.\n".
                "Email: $formEmail\n".
                "Poruka:\n $formMessage";
      
  $recipients = array(
    "office@belgrade-nightlife.com",
    "milanche_show@hotmail.com",
    "milicastanojevic261@gmail.com"
  );

  $email_to = implode(',', $recipients); // your email address

  //$to = "office@belgrade-nightlife.com";//<== update the email address
  $headers = "From: $email_from \r\n";
  $headers = "Reply-To: $formEmail \r\n";
  //Send the email!
  mail($email_to,$email_subject,$email_body,$headers);
}

echo json_encode($response);

// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 