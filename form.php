<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "internship";

$uname = $_POST['uname'];
$first_name = $_POST['fname'];
$last_name = $_POST['lname'];
$city = $_POST['city'];
$address = $_POST['address'];
$email = $_POST['email'];
$number = $_POST['phone'];
$desc = $_POST['desc'];
$gender = $_POST['gender'];
$stream = $_POST['stream'];
$age = $_POST['age'];
$pwd = $_POST['pwd'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO Student (Username, FirstName, LastName, City, Address, EmailId, Pass, ContactNumber, Description, Gender, Stream, Age)
VALUES ('".$uname."', '".$first_name."', '".$last_name."', '".$city."', '".$address."', '".$email."', '".$pwd."', '".$number."', '".$desc."', '".$gender."', '".$stream."', '".$age."');";

if ($conn->query($sql) === TRUE) {
  echo ("<h2 style='text-align:center; background-color: #8f8f8f; '>Thank you for choosing INTERNHUB<br>Your response has been recorded!</h2>");
} else {
  echo ("<h2>Error: " . $sql . "<br>" . $conn->error);
  echo ("</h2>");
}

echo ("<a href='signinstudent.php'><h2 style='text-align:center; background-color: #8f8f8f;'>Sign in</h2></a>")
?>
