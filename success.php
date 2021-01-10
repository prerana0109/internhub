<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">

  <title>Student after login</title>

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
$uname = $_POST['uname'];
if(!isset($_GET['edit']) && !isset($_POST['updatee']) && !isset($_GET['details']) && !isset($_POST['toapplybutton'])){
$uname = $_POST['uname'];
$pwd = $_POST['pwd'];

$result = mysqli_query($conn, "select Username, Pass, FirstName from Student where Username = '$uname' and Pass = '$pwd'")
                or die("Failed".mysqli_error());
$row = mysqli_fetch_array($result);
if($row['Username'] == $uname && $row['Pass'] == $pwd){
echo "<h1>Welcome  ".$row['FirstName']."!";
echo "</h1>";
}
else{
echo "<h2>Failed to login</h2>";
}
}


if (isset($_GET['delete'])){
  $uname = $_GET['delete'];
  $result = mysqli_query($conn, "delete from Student where Username = '$uname'")
                  or die("Failed".mysqli_error());
$_SESSION['message'] = "Account deleted successfully!";
$_SESSION['msg_type'] = "danger";
header("location: copysignin.php");
}

if (isset($_GET['edit'])){
  $uname = $_GET['edit'];
  $result = mysqli_query($conn, "select * from Student where Username='$uname'")
                  or die("Failed".mysqli_error());
if(count($result)==1){
  $row = mysqli_fetch_array($result);
  $update = true;
  $namee = $row['Username'];
  $pwdd = $row['Pass'];
}
echo "<h1>Welcome  ".$row['FirstName']."!";
echo "</h1>";
}

if(isset($_POST['updatee'])){
  $namee = $_POST['emailchange'];
  $pwdd = $_POST['newpassword'];
  $result = mysqli_query($conn, "update Student set Pass = '$pwdd' where Username = '$namee' ")
                  or die("Failed".mysqli_error());

  $result1 = mysqli_query($conn, "select * from Student where Username='$namee'")
                                  or die("Failed".mysqli_error());
$row = mysqli_fetch_array($result1);
  // header("location: success.php");
  echo "<h1>Welcome  ".$row['FirstName']."!";
  echo "</h1>";
}

if(isset($_GET['details'])){
  $uname = $_GET['details'];
  $result = mysqli_query($conn, "select * from Student where Username = '$uname'")
                  or die("Failed".mysqli_error());
$row = mysqli_fetch_array($result);
$details = true;
echo "<h1>Welcome  ".$row['FirstName']."!";
echo "</h1>";
}

if(isset($_POST['toapplybutton'])){
  $key = $_POST['toapply'];
  $check = mysqli_query($conn, "select * from applies where username = '$uname' and internshipid = '$key'")
                                or die("Failed".mysqli_error());
  if(mysqli_num_rows($check)>0){
    // record found so dont insert
    echo '<script>alert("Already applied for this Internship.")</script>';
  }
  else{
    // record not found so insert
    $insertquery = mysqli_query($conn, "insert into applies (username, internshipid) values ('".$uname."', '".$key."')")
                                        or die("Failed".mysqli_error());
      echo '<script>alert("Applied! Wait for the recruiters response.")</script>';
  }
  $applies = true;


}

?>




<!--TABLE -->
<section style="margin-top: 80px;" class="studentaltable">
<h3>AVAILABLE INTERSHIPS</h3>
<?php
$internships = mysqli_query($conn, "select * from Internship")
or die("Failed".mysqli_error());

$company = mysqli_query($conn, "select * from Recruiter")
or die("Failed".mysqli_error());

echo "<table border='1' align='center' style='width:80%; margin-left='5px'; margin-right='5px''>";

  echo "<tr>";

  echo "<th style='width:70px;'>Internship ID</td>";
    echo "<th style='width:250px;'>Post</td>";
    // echo "<td style='width:500px;'>$roww[2]</td>";
    echo "<th style='width:70px;'>Start Date</td>";
    echo "<th style='width:70px;'>End Date</td>";
    echo "<th style='width:70px;'>Prerequisites</td>";
    echo "<th style='width:70px;'>Stipend</td>";
    echo "<th style='width:70px;'>Company ID</td>";
    echo "<th style='width:70px;'>Select</td>";
    echo "<th style='width:70px;'>Status</td>";

  echo "</tr>";


while($roww = mysqli_fetch_row($internships))
{

    echo "<tr>";
    echo "<form action='' method='post'>";
    echo "<td style='width:70px;'>$roww[0]</td>";
    echo "<td style='width:250px;'>$roww[1]</td>";
    // echo "<td style='width:500px;'>$roww[2]</td>";
    echo "<td style='width:70px;'>$roww[3]</td>";
    echo "<td style='width:70px;'>$roww[4]</td>";
    echo "<td style='width:70px;'>$roww[5]</td>";
    echo "<td style='width:70px;'>$roww[6]</td>";
    if($roww[7]=='00000001'){
      echo "<td style='width:70px;'>TCS</td>";
    }
    else if($roww[7]=='00000002'){
    echo "<td style='width:70px;'>Deloitte</td>";
    }
    else if($roww[7]=='00000003'){
      echo "<td style='width:70px;'>Google</td>";
    }
    echo "<td style='width:70px;'><input type='checkbox' name='toapply' value='$roww[0]' required></td>";
    echo "<td style='width:70px;'><input type='submit' name='toapplybutton' value='Apply'></td>";
    echo "</form>";
    echo "</tr>\n";

}
echo "</table>";

echo "<p><br><p>";


echo "<table border='1' align='center' style='width:50%; margin-left='5px'; margin-right='5px''>";

  echo "<tr>";

  // echo "<th style='width:70px;'>Company ID</td>";
    echo "<th style='width:250px;'>Company Name</td>";
    // echo "<td style='width:500px;'>$roww[2]</td>";
    echo "<th style='width:70px;'>Email ID</td>";
    echo "<th style='width:70px;'>Contact Number</td>";

  echo "</tr>";

while($roww = mysqli_fetch_row($company))
{

    echo "<tr>";

    //echo "<td style='width:70px;'>$roww[0]</td>";
    echo "<td style='width:250px;'>$roww[1]</td>";
    // echo "<td style='width:500px;'>$roww[2]</td>";
    echo "<td style='width:70px;'>$roww[3]</td>";
    echo "<td style='width:70px;'>$roww[7]</td>";

    echo "</tr>\n";

}
echo "</table>";

?>
</section>

<p><br></p>

<a href="success.php?edit=<?php echo $row['Username'];?>" class="btnRegister"><h2 style="text-align:center;background-color:black; font-weight:bold; color:white;">Change Password</h2></a>
<a href="success.php?delete=<?php echo $row['Username'];?>" class="btnRegister"><h2 style="text-align:center;background-color:black; font-weight:bold; color:white;">Delete Account</h2></a>
<a href="success.php?details=<?php echo $row['Username'];?>" class="btnRegister"><h2 style="text-align:center;background-color:black; font-weight:bold; color:white;">View Profile Details</h2></a>

<p><br></p>

<input type="hidden" name="user" value="<?php echo $user;?>">

<?php
if($update == true):
?>

<form class="" action="success.php" method="post">
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
First Name: <?php echo $row['FirstName']; ?> <br>
Last Name: <?php echo $row['LastName']; ?> <br>
Username: <?php echo $row['Username']; ?> <br>
Email ID: <?php echo $row['EmailId']; ?> <br>
City: <?php echo $row['City']; ?> <br>
Address: <?php echo $row['Address']; ?> <br>
Contact Number: <?php echo $row['ContactNumber']; ?> <br>
Description: <?php echo $row['Description']; ?> <br>
Age: <?php echo $row['Age']; ?> <br>
Gender: <?php echo $row['Gender']; ?> <br>
Stream: <?php echo $row['Stream']; ?> <br>
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
