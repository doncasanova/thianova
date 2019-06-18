<?php

$errorMSG = "";

// NAME
if (empty($_POST["nameSub"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["nameSub"];
}

// EMAIL
if (empty($_POST["emailSub"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["emailSub"];
}


$EmailTo = "ethanjuan@yahoo.com";
$Subject = "New Subscriber Received";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>