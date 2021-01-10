
$(document).ready(function() {
  $("#register").click(function(e) {
  
      var firstname = $('#fname').val();
      var lastname = $('#lname').val();
      var username = $('#uname').val();
      var email = $('#email').val();
      var password = $('#pwd').val();
      var cfmpassword = $('#cpwd').val();
      var addr = $('#addr').val();
      var phone = $('#phone').val();
      var dob = $('#birthday').val();
      var desc=$("#desc").val();
      var course=$("#course").val();
  
      if (firstname.length < 1) {
        $("#fname").css("border-color", "red").css("background-color","#ea907a");
          $('#messagef').html('<span class="error"><em>Please Enter Your FirstName</em></span>').css('color', 'red');
            e.preventDefault();
        }
      if (lastname.length < 1) {
        $("#lname").css("border-color", "red").css("background-color","#ea907a");
          $('#messagel').html('<span class="error"><em>Please Enter Your LastName</em></span>').css('color', 'red');
            e.preventDefault();
        }
  
      if (username.length < 3) {
        $("#uname").css("border-color", "red").css("background-color","#ea907a");
          $('#messageu').html('<span class="error"><em>Please Enter enter a username</em></span>').css('color', 'red');
    e.preventDefault();
        }
  
  
    if (course==null)
      {
        $("#course").css("border-color", "red").css("background-color","#ea907a");
        $('#messagecourse').html('<span class="error"><em>This is required</em></span>').css('color', 'red');
    e.preventDefault();
      }
  
      if (email.length < 1) {
        $("#email").css("border-color", "red").css("background-color","#ea907a");
  $('#messagee').html('<span class="error"><em>Please Enter Your E-mail</em></span>').css('color', 'red');
        e.preventDefault();
        }
  
        var regEx = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
        var validemail = regEx.test(email);
        if (!validemail) {
          $("#email").css("border-color", "red").css("background-color","#ea907a");
  $('#messagee').html('<span class="error"><em>Please Enter a Valid E-mail</em></span>').css('color', 'red');
  e.preventDefault();
  
      }
  
  
  
      if (password.length == 0) {
        $("#pwd").css("border-color", "red").css("background-color","#ea907a");
  $('#messagepwd').html('<span class="error"><em>Please Enter a Password</em></span>').css('color', 'red');
    e.preventDefault();
        }
  
      if (password.length < 5 & password.length != 0) {
        $("#pwd").css("border-color", "red").css("background-color","#ea907a");
  $('#messagepwd').html('<span class="error"><em>Please Your Password should be greater than 5</em></span>').css('color', 'red');
    e.preventDefault();
      }
  
        var strpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        var validpass=strpass.test(password);
        if(!validpass)
              {
                $("#pwd").css("border-color", "red").css("background-color","#ea907a");
                $('#messagepwd').html('<span class="error"><em>Min:1 lowercase, 1 uppercase, 1 digit(0,9), 1 special character, min-length(5), max-length(16)</em></span>').css('color', 'red');
                  e.preventDefault();
      }
  
          if ($('#pwd').val() != $('#cpwd').val()) {
            $("#cpwd").css("border-color", "red").css("background-color","#ea907a");
                $('#messagecpwd').html('Your passwords dont match').css('color', 'red');
  
              e.preventDefault();
          }
  
  
  
      if (cfmpassword.length == 0) {
        $("#cpwd").css("border-color", "red").css("background-color","#ea907a");
  $('#messagecpwd').html('<span class="error"><em>Please Confirm Your Password</em></span>').css('color', 'red');
  e.preventDefault();
  
        }
  
        var gendcheck = $('#gender').val();
        if (gendcheck==null)
        {
          $("#gender").css("border-color", "red").css("background-color","#ea907a");
          $('#messageg').html('<span class="error"><em>This is required</em></span>').css('color', 'red');
          e.preventDefault();
  
        }
  
        if (addr.length==0)
        {
          $("#addr").css("border-color", "red").css("background-color","#ea907a");
          $('#messageaddr').html('<span class="error"><em>Please Enter Your Address</em></span>').css('color', 'red');
          e.preventDefault();
  
        }
  
  
  
        if (phone.length < 10) {
          $("#phone").css("border-color", "red").css("background-color","#ea907a");
    $('#messagemob').html('<span class="error"><em>Please Enter a Valid Phone Number</em></span>').css('color', 'red');
    e.preventDefault();
  
          }
            var phoneno = /^\d{10}$/;
        var validphone = phoneno.test(phone);
   if(!validphone)
         {
           $("#phone").css("border-color", "red").css("background-color","#ea907a");
           $('#messagemob').html('<span class="error"><em>Please Enter a Valid Phone Number</em></span>').css('color', 'red');
           e.preventDefault();
  
         }
  
  
  
       var year = Number(dob.substr(0, 4));
       var month = Number(dob.substr(4, 2)) - 1;
       var day = Number(dob.substr(6, 2));
       var today = new Date();
       var age = today.getFullYear() - year;
       if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
         age--;
       }
        if(age<16){
       $("#birthday").css("border-color", "red").css("background-color","#ea907a");
       $('#messagedob').html('<span class="error"><em>You have to be 16 years old</em></span>').css('color', 'red');
       e.preventDefault();
  
       }
  
       if (desc.length==0)
       {
         $("#desc").css("border-color", "red").css("background-color","#ea907a");
         $('#messagedesc').html('<span class="error"><em>Please Enter A Description</em></span>').css('color', 'red');
  
         e.preventDefault();
  
        }
  
    });
  
  });
  
  
  
  
  jQuery(function($) {
  
    $("#gender").change(function () {
          var end = this.value;
          if(end=="male" ||end=="female" ||end=="other")
          {
            $("#gender").css("border-color", "#00FF00");
            $("#gender").css("border-color", "green").css("background-color","#90ee90");
            $('#messageg').html('<span class="error"><em></em></span>').css('color', 'red');
  
          }
      });
  
      $("#course").change(function () {
            var send = this.value;
            if(send=="science" ||send=="commerce" ||send=="business"||send=="technology"||send=="arts"||send=="engineering")
            {
              $("#course").css("border-color", "#00FF00");
              $("#course").css("border-color", "green").css("background-color","#90ee90");
              $('#messagecourse').html('<span class="error"><em></em></span>').css('color', 'red');
  
            }
        });
  
  
    $("#fname").on("blur", function() {
      if ($(this).val().length == 0 && $(this).val().length < 1) {
              $("#fname").css("border-color", "red").css("background-color","#ea907a");
        $('#messagef').html('<span class="error"><em>Please Enter Your FirstName</em></span>').css('color', 'red');
  
      }
    });
  
  
    $("#fname").on("keyup", function() {
      if ($(this).val().length == 0 && $(this).val().length < 1) {
              $('#messagef').html('<span><em>Please Enter Your FirstName</em></span>').css('color', 'black');
  
      }
    });
  
    $("#fname").on("keyup", function() {
      if ($(this).val().length >= 1) {
        $("#fname").css("border-color", "#00FF00");
        $("#fname").css("border-color", "green").css("background-color","#90ee90");
        $('#messagef').html('<span class="error"><em></em></span>').css('color', 'red');
  
      }
  
    });
  
  
  $("#fname").on("blur", function() {
    if ($(this).val().length >= 1) {
      $("#fname").css("border-color", "#00FF00");
      $("#fname").css("border-color", "green").css("background-color","#90ee90");
      $('#messagef').html('<span class="error"><em></em></span>').css('color', 'red');
  
        }
  });
  
  
  $("#lname").on("blur", function() {
    if ($(this).val().length == 0 && $(this).val().length < 2) {
      $("#lname").css("border-color", "red").css("background-color","#ea907a");
      $('#messagel').html('<span class="error"><em>Please Enter Your LastName</em></span>').css('color', 'red');
  
    }
  });
  
  
  
  $("#lname").on("keyup", function() {
    if ($(this).val().length > 0) {
      $("#lname").css("border-color", "#00FF00");
      $("#lname").css("border-color", "green").css("background-color","#90ee90");
      $('#messagel').html('<span class="error"><em></em></span>').css('color', 'red');
    }
  });
  
  $("#lname").on("blur", function() {
    if ($(this).val().length > 0) {
      $("#lname").css("border-color", "#00FF00");
      $("#lname").css("border-color", "green").css("background-color","#90ee90");
      $('#messagel').html('<span class="error"><em></em></span>').css('color', 'red');
        }
  });
  
  $("#uname").on("blur", function() {
    if ($(this).val().length == 0 && $(this).val().length <= 2) {
      $("#uname").css("border-color", "red").css("background-color","#ea907a");
      $('#messageu').html('<span class="error"><em>Please Enter Your UserName</em></span>').css('color', 'red');
  
    }
  });
  
  $("#uname").on("keyup", function() {
    if ($(this).val().length >=1 && $(this).val().length <=2) {
      $("#uname").css("border-color", "red").css("background-color","#ea907a");
      $('#messageu').html('<span class="error"><em>Please Enter Your UserName (Your username should be atleast 3 characters. )</em></span>').css('color', 'red');
  
    }
  });
  
  $("#uname").on("keyup", function() {
    if ($(this).val().length > 2) {
      $("#uname").css("border-color", "#00FF00");
      $("#uname").css("border-color", "green").css("background-color","#90ee90");
      $('#messageu').html('<span class="error"><em></em></span>').css('color', 'red');
      }
  });
  
  $("#uname").on("blur", function() {
    if ($(this).val().length >2) {
      $("#uname").css("border-color", "#00FF00");
      $("#uname").css("border-color", "green").css("background-color","#90ee90");
      $('#messageu').html('<span class="error"><em></em></span>').css('color', 'red');
      }
  });
  
  
  $("#pwd, #cpwd").on('focusout', function() {
    if ($('#pwd').val().length > 2 && $('#cpwd').val().length > 2)
     {
      if ($('#pwd').val() == $('#cpwd').val()) {
        $("#pwd").css("border-color", "#00FF00");
        $("#pwd").css("border-color", "green").css("background-color","#90ee90");
        $("#cpwd").css("border-color", "#00FF00");
        $("#cpwd").css("border-color", "green").css("background-color","#90ee90");
            $('#messagecpwd').html('Your passwords match').css('color', 'green');
  
      } else
  
  $('#messagecpwd').html('<span class="error"><em>Your passwords should match</em></span>').css('color', 'red');
    }
  });
  
  
  $("#pwd").on("keyup", function() {
    if ($(this).val().length < 5 && $(this).val().length != 0) {
    $("#pwd").css("border-color", "red").css("background-color","#ea907a");
      $('#messagepwd').html('<span class="error"><em>Min:1 lowercase, 1 uppercase, 1 digit(0,9), 1 special character, min-length(5), max-length(16)</em></span>').css('color', 'red');
  }
  });
  
  
  
  $("#pwd").on("keyup", function() {
  var password = $('#pwd').val();
  var strpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var validpass=strpass.test(password);
  if(validpass)
        {
          $("#pwd").css("color", "black");
          $("#pwd").css("border-color", "green").css("background-color","#90ee90");
          $('messagepwd').html('<span class="error"><em>Strong Password</em></span>').css('color', 'red');
      }
  });
  
  $("#pwd").on("blur", function() {
    if ($(this).val().length >1) {
  var password = $('#pwd').val();
  var strpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,16}$/;
  var validpass=strpass.test(password);
  if(!validpass)
        {
          $("#pwd").css("color", "black");
            $("#pwd").css("border-color", "red").css("background-color","#ea907a");
            $('#messagepwd').html('<span class="error"><em>Min:1 lowercase, 1 uppercase, 1 digit(0,9), 1 special character, min-length(5), max-length(16)</em></span>').css('color', 'red');
  
      }
  else if (!valid){
    $("#pwd").css("color", "black");
    $("#pwd").css("border-color", "green").css("background-color","#90ee90");
    $('messagepwd').html('<span class="error"><em>Strong Password</em></span>').css('color', 'red');
  
  }
  }
  });
  
  $("#pwd").on("keyup", function() {
  var password = $('#pwd').val();
  var strpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,16}$/;
  var validpass=strpass.test(password);
  if(!validpass)
        {
          $("#pwd").css("color", "black");
            $("#pwd").css("border-color", "red").css("background-color","#ea907a");
            $('#messagepwd').html('<span class="error"><em>Min:1 lowercase, 1 uppercase, 1 digit(0,9), 1 special character, min-length(5), max-length(16)</em></span>').css('color', 'red');
  
      }
  });
  
  
  $("#email").on("blur", function() {
    var regEx = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
    var email1=$('#email').val();
    var svalidemail = regEx.test(email1);
  
    if (!svalidemail) {
  
    $("#email").css("border-color", "red").css("background-color","#ea907a");
  $('#messagee').html('<span class="error"><em>Please Enter a Valid E-mail</em></span>').css('color', 'red');
  
  }
  else{
    $("#email").css("border-color", "green").css("background-color","#90ee90");
    $('#messagee').html('<span class="error"><em></em></span>').css('color', 'red');
  
  }
  });
  
  
  
  
  
  
  
  
  
  $("#phone").on("keyup", function() {
    if ($(this).val().length >1 && $(this).val().length < 10) {
      $("#phone").css("border-color", "red").css("background-color","#ea907a");
      $('#messagemob').html('<span class="error"><em>Please Enter A Valid Phone Number</em></span>').css('color', 'red');
  
    }
  });
  
  
  $("#phone").on("keyup", function() {
    if ($(this).val().length ==10) {
      $("#phone").css("border-color", "#00FF00");
      $("#phone").css("border-color", "green").css("background-color","#90ee90");
      $('#messagemob').html('<span class="error"><em></em></span>').css('color', 'red');
      }
  });
  
  $("#phone").on("blur", function() {
    if ($(this).val().length ==10) {
      $("#phone").css("border-color", "#00FF00");
      $("#phone").css("border-color", "green").css("background-color","#90ee90");
      $('#messagemob').html('<span class="error"><em></em></span>').css('color', 'red');
      }
  });
  
  $("#addr").on("keyup", function() {
    if ($(this).val().length > 1) {
      $("#addr").css("border-color", "#00FF00");
      $("#addr").css("border-color", "green").css("background-color","#90ee90");
      $('#messageaddr').html('<span class="error"><em></em></span>').css('color', 'red');
      }
  });
  
  
  $("#addr").on("blur", function() {
    if ($(this).val().length < 1) {
      $("#addr").css("border-color", "red").css("background-color","#ea907a");
  $('#messageaddr').html('<span class="error"><em>Please Enter Your Address</em></span>').css('color', 'red');
      }
  });
  
  
  $("#desc").on("keyup", function() {
    if ($(this).val().length > 1) {
      $("#desc").css("border-color", "#00FF00");
      $("#desc").css("border-color", "green").css("background-color","#90ee90");
      $('#messagedesc').html('<span class="error"><em></em></span>').css('color', 'red');
      }
  });
  
  
  $("#desc").on("blur", function() {
    if ($(this).val().length < 1) {
      $("#desc").css("border-color", "red").css("background-color","#ea907a");
  $('#messagedesc').html('<span class="error"><em>Please Enter A Description</em></span>').css('color', 'red');
      }
  });
  
  $("#phone").on("blur", function() {
    if ($(this).val().length < 10) {
      $("#phone").css("border-color", "red").css("background-color","#ea907a");
  $('#messagemob').html('<span class="error"><em>Please Enter Your Phone Number</em></span>').css('color', 'red');
      }
  });
  
  $("#birthday").on("blur", function() {
        var dob1 = $('#birthday').val();
       var year = Number(dob1.substr(0, 4));
       var month = Number(dob1.substr(4, 2)) - 1;
       var day = Number(dob1.substr(6, 2));
       var today = new Date();
       var age2 = today.getFullYear() - year;
       if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
         age2--;
       }
       {
         $("#birthday").css("border-color", "#00FF00");
         $("#birthday").css("border-color", "green").css("background-color","#90ee90");
         $('#messagedob').html('<span class="error"><em></em></span>').css('color', 'red');
  
       }
       if(age2<16){
       $("#birthday").css("border-color", "red").css("background-color","#ea907a");
       $('#messagedob').html('<span class="error"><em>You have to be 16 years old</em></span>').css('color', 'red');
       e.preventDefault();
  
       }
  });
  
  });
  