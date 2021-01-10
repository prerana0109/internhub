<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "internship";

$cname = $_POST['cname'];
$cmname = $_POST['cmname'];
$domain = $_POST['domain'];
$emailc = $_POST['emailc'];
$pwdc = $_POST['pwdc'];
$phonecomp = $_POST['phonecomp'];
$compregid = $_POST['compregid'];
$addrc = $_POST['address'];
$descom = $_POST['descom'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO Recruiter (CompanyId, CompanyName, CompanyManager, CEmail, CPass, CAddress, CDesc, CNumber, CDomain)
VALUES ('".$compregid."', '".$cname."', '".$cmname."', '".$emailc."', '".$pwdc."', '".$addrc."', '".$descom."', '".$phonecomp."', '".$domain."');";

if ($conn->query($sql) === TRUE) {
  echo ("<h2 style='text-align:center; background-color: #8f8f8f;'>Thank you for choosing INTERNHUB<br>Your response has been recorded!</h2>");
} else {
  echo ("<h2>Error: " . $sql . "<br>" . $conn->error);
  echo ("</h2>");
}

echo ("<a href='copysigninrecruiter.php'><h2 style='text-align:center; background-color: #8f8f8f;'>Sign in</h2></a>")
?>
