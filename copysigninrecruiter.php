<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "internship";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


?>


<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title></title>
  <link rel="stylesheet" href="signinstudent.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="signinstudent.js" charset="utf-8"></script>
</head>

<body style="background-color:black">

  <div class="container register">
    <div class="row">
      <div class="col-md-3 register-left">
        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
        <h3>Welcome</h3>
        <br>
        <br>
        <p style="padding-bottom:0;">Haven't registered yet?</p>
<button type="button" id='redirectstu' onclick="window.location.href='home.html'" class="btn btn-dark btn-lg register-button sectionplate">REGISTER NOW!</button>
      </div>
      <div class="col-md-9 register-right">
        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
        <form method='post' action='successrecruiter.php'>
          <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Recruiter</a>
          </li>
          
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h3 class="register-heading">Sign in as a Recruiter</h3>
            <div class="row register-form">
              <div class="col-lg-6">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Company ID" value="" name="uname" />
                </div>
            </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="Password" value="" name="pwd"/>
                </div>
              </div>
              <div class="col-lg-8">
                <input  type="submit" class="btnRegister" value="Sign In" />
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>

  </div>

</body>

</html>

