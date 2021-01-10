<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">

  <title>Company after login</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat|Ubuntu" rel="stylesheet">

  <!-- CSS Stylesheets -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


  <!-- Font Awesome -->
  <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Acme&family=Montserrat:wght@500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="success.css">

  <!-- Bootstrap Scripts -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


</head>

<body>
  <section class="colored-section" id="title">

    <div class="container-fluid">

      <!-- Nav Bar -->

      <nav class="navbar navbar-expand-lg navbar-dark">

        <a class="navbar-brand" href="">internhub</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="home.html">Log-Out</a>
            </li>
          </ul>

        </div>
      </nav>
      <!-- Title -->
    </div>

  </section>


<?php

error_reporting(E_ALL ^ E_NOTICE);
error_reporting(E_ERROR | E_PARSE);
$namee = '';
$pwdd = '';
$update = false;
$details = false;

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

if(!isset($_GET['edit']) && !isset($_POST['updatee']) && !isset($_GET['details'])){
$uname = $_POST['uname'];
$pwd = $_POST['pwd'];

$result = mysqli_query($conn, "select CompanyId, CPass, CompanyName from Recruiter where CompanyId = '$uname' and CPass = '$pwd'")
                or die("Failed".mysqli_error());
$row = mysqli_fetch_array($result);
if($row['CompanyId'] == $uname && $row['CPass'] == $pwd){
echo "<h1>".$row['CompanyName']."!";
echo "</h1>";
}
else{
echo "<h2>Failed to login</h2>";
}
}


if (isset($_GET['delete'])){
  $uname = $_GET['delete'];
  $result = mysqli_query($conn, "delete from Recruiter where CompanyId = '$uname'")
                  or die("Failed".mysqli_error());
$_SESSION['message'] = "Account deleted successfully!";
$_SESSION['msg_type'] = "danger";
header("location: home.html");
}

if (isset($_GET['edit'])){
  $uname = $_GET['edit'];
  $result = mysqli_query($conn, "select * from Recruiter where CompanyId='$uname'")
                  or die("Failed".mysqli_error());
if(count($result)==1){
  $row = mysqli_fetch_array($result);
  $update = true;
  $namee = $row['CompanyId'];
  $pwdd = $row['CPass'];
}
echo "<h1>".$row['CompanyName']."!";
echo "</h1>";
}

if(isset($_POST['updatee'])){
  $namee = $_POST['emailchange'];
  $pwdd = $_POST['newpassword'];
  $result = mysqli_query($conn, "update Recruiter set CPass = '$pwdd' where CompanyId = '$namee' ")
                  or die("Failed".mysqli_error());

  $result1 = mysqli_query($conn, "select * from Recruiter where CompanyId='$namee'")
                                  or die("Failed".mysqli_error());
$row = mysqli_fetch_array($result1);
  // header("location: success.php");
  echo "<h1>".$row['CompanyName']."!";
  echo "</h1>";
}

if(isset($_GET['details'])){
  $uname = $_GET['details'];
  $result = mysqli_query($conn, "select * from Recruiter where CompanyId = '$uname'")
                  or die("Failed".mysqli_error());
$row = mysqli_fetch_array($result);
$details = true;
echo "<h1>".$row['CompanyName']."!";
echo "</h1>";
}


?>




<!--TABLE -->
<section style="margin-top: 60px;" class="studentaltable">
<h3>APPLICATIONS</h3>
<?php
$internships = mysqli_query($conn, "select * from Internship where CompanyId = '$uname'")
or die("Failed".mysqli_error());

$q1 = "select internshipid from internship where companyid = $uname";

$q2 = mysqli_query($conn, "select username, internshipid from applies where internshipid in ($q1)")
or die("looser".mysqli_error());

// $q3 = mysqli_query($conn, "select username, FirstName, LastName, EmailId, ContactNumber, Stream, Age from student where username in (select username from applies where internshipid in ($q1))")
// or die("looser".mysqli_error());

echo "<table border='1' align='center' style='width:80%; margin-left='5px'; margin-right='5px''>";
echo "<tr>";

    echo "<th style='width:70px;'>Internship ID</td>";
    echo "<th style='width:70px;'>Username</td>";
     echo "<th style='width:70px;'>First Name</td>";
    echo "<th style='width:70px;'>Last Name</td>";
    echo "<th style='width:70px;'>Email ID</td>";
    echo "<th style='width:70px;'>Contact Number</td>";
    echo "<th style='width:70px;'>Stream</td>";
    echo "<th style='width:70px;'>Age</td>";

    echo "</tr>\n";
while($ans = mysqli_fetch_row($q2))
{
    echo "<tr>";

    $q3 = mysqli_query($conn, "select username, FirstName, LastName, EmailId, ContactNumber, Stream, Age from student where username = '$ans[0]'")
or die("looser".mysqli_error());
$stud = mysqli_fetch_array($q3);
    echo "<td style='width:70px;'>$ans[1]</td>";
    echo "<td style='width:70px;'>$ans[0]</td>";
    echo "<td style='width:70px;'>$stud[1]</td>";
    echo "<td style='width:70px;'>$stud[2]</td>";
    echo "<td style='width:70px;'>$stud[3]</td>";
    echo "<td style='width:70px;'>$stud[4]</td>";
    echo "<td style='width:70px;'>$stud[5]</td>";
    echo "<td style='width:70px;'>$stud[6]</td>";

    echo "</tr>\n";

}
echo "</table>";

echo "<br>";
echo "<h3>DETAILS OF INTERNSHIPS CREATED</h3>";

echo "<table border='1' align='center' style='width:80%; margin-left='5px'; margin-right='5px''>";
echo "<tr>";

    echo "<th style='width:70px;'>Internship ID</td>";
    echo "<th style='width:250px;'>Post</td>";
    // echo "<td style='width:500px;'>$roww[2]</td>";
    echo "<th style='width:70px;'>Start Date</td>";
    echo "<th style='width:70px;'>End Date</td>";
    echo "<th style='width:70px;'>Prerequisites</td>";
    echo "<th style='width:70px;'>Stipend</td>";
    // echo "<td style='width:70px;'>$roww[7]</td>";

    echo "</tr>\n";
while($roww = mysqli_fetch_row($internships))
{
    echo "<tr>";

    echo "<td style='width:70px;'>$roww[0]</td>";
    echo "<td style='width:250px;'>$roww[1]</td>";
    // echo "<td style='width:500px;'>$roww[2]</td>";
    echo "<td style='width:70px;'>$roww[3]</td>";
    echo "<td style='width:70px;'>$roww[4]</td>";
    echo "<td style='width:70px;'>$roww[5]</td>";
    echo "<td style='width:70px;'>$roww[6]</td>";
    // echo "<td style='width:70px;'>$roww[7]</td>";

    echo "</tr>\n";

}
echo "</table>";
?>
</section>

<p><br></p>

<a href="successrecruiter.php?edit=<?php echo $row['CompanyId'];?>" class="btnRegister"><h2 style="text-align:center;background-color:black; font-weight:bold; color:white;">Change Password</h2></a>
<a href="successrecruiter.php?delete=<?php echo $row['CompanyId'];?>" class="btnRegister"><h2 style="text-align:center;background-color:black; font-weight:bold; color:white;">Delete Account</h2></a>
<a href="successrecruiter.php?details=<?php echo $row['CompanyId'];?>" class="btnRegister"><h2 style="text-align:center;background-color:black; font-weight:bold; color:white;">View Profile Details</h2></a>

<p><br></p>

<input type="hidden" name="user" value="<?php echo $user;?>">

<?php
if($update == true):
?>

<form class="" action="successrecruiter.php" method="post">
  <label for="emailchange">Username:-</label>
  <input type="text" name="emailchange" id="emailchange" value="<?php echo $namee; ?>">
    <br>
    <br>
    <br>
  <label for="newpassword">Password:-</label>
  <input type="newpassword" name="newpassword" id="newpassword" value="">
  <br>
  <br>
  <br>
  <label for="cfmpassword">Confirm Password:-</label>
  <input type="cfmpassword" name="cfmpassword" id="cfmpassword" value=""> <br>
  <input type="submit" name="updatee" value="Edit" class="btnRegister">
</form>

<?php endif; ?>

<?php
if($details == true):
?>

<div class="">

<p>
Company ID: <?php echo $row['CompanyId']; ?> <br>
Company Name: <?php echo $row['CompanyName']; ?> <br>
Company Manager: <?php echo $row['CManager']; ?> <br>
Email ID: <?php echo $row['CEmail']; ?> <br>
Contact Number: <?php echo $row['CNumber']; ?> <br>
Address: <?php echo $row['CAddress']; ?> <br>
Domain: <?php echo $row['CDomain']; ?> <br>
Description: <?php echo $row['CDesc']; ?> <br>
</p>

</div>

<?php endif; ?>

  <!-- Footer -->

  <footer class="white-section" id="footer">
    <br>
    <br>

    <div class="container-fluid">
        <p style="color:black;">CONTACT US FOR ANY QUERY!</p>
      <i class="social-icon fab fa-facebook-f"></i>
      <i class="social-icon fab fa-twitter"></i>
      <i class="social-icon fab fa-instagram"></i>
      <i class="social-icon fas fa-envelope"></i>
      <p>© Copyright 2020 internhub</p>
    </div>
  </footer>


</body>

</html>
