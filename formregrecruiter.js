
$(document).ready(function() {
$("#registerec").click(function(e) {

    var manager = $('#cmname').val();
    var cname = $('#cname').val();
    var emailc = $('#emailc').val();
    var password1 = $('#pwdc').val();
    var cfmpassword1 = $('#cpwdc').val();
    var addrc = $('#addrc').val();
    var phonecomp = $('#phonecomp').val();
    var descom=$("#descom").val();
    var domain=$("#domain").val();
    var comid=$("#compregid").val();

    if (manager.length < 1) {
      $("#cmname").css("border-color", "red").css("background-color","#ea907a");
        $('#cmmessage').html('<span class="error"><em>Please Enter the name of your manager</em></span>').css('color', 'red');
          e.preventDefault();
      }

    if (cname.length < 1) {
      $("#cname").css("border-color", "red").css("background-color","#ea907a");
        $('#messagecn').html('<span class="error"><em>Please Enter your Company Name</em></span>').css('color', 'red');
  e.preventDefault();
      }


  if (domain==null)
    {
      $("#domain").css("border-color", "red").css("background-color","#ea907a");
      $('#messagedomain').html('<span class="error"><em>This is required</em></span>').css('color', 'red');
  e.preventDefault();
    }

    if (emailc.length < 1) {
      $("#emailc").css("border-color", "red").css("background-color","#ea907a");
$('#messageec').html('<span class="error"><em>Please Enter Your E-mail</em></span>').css('color', 'red');
      e.preventDefault();
      }

      var regEx1 = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
      var validemailc = regEx1.test(emailc);
      if (!validemailc) {
        $("#emailc").css("border-color", "red").css("background-color","#ea907a");
$('#messagecc').html('<span class="error"><em>Please Enter a Valid E-mail</em></span>').css('color', 'red');
e.preventDefault();

    }

if (password1.length < 5 & password1.length != 0) {
      $("#pwdc").css("border-color", "red").css("background-color","#ea907a");
$('#messagepwdc').html('<span class="error"><em>Please Your Password should be greater than 5</em></span>').css('color', 'red');
  e.preventDefault();
    }

      var strpass1 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      var validpass1=strpass1.test(password1);
      if(!validpass1)
            {
              $("#pwdc").css("border-color", "red").css("background-color","#ea907a");
              $('#messagepwdc').html('<span class="error"><em>Min:1 lowercase, 1 uppercase, 1 digit(0,9), 1 special character, min-length(5), max-length(16)</em></span>').css('color', 'red');
                e.preventDefault();
    }

        if ($('#pwdc').val() != $('#cpwdc').val()) {
          $("#cpwdc").css("border-color", "red").css("background-color","#ea907a");
              $('#messagecpwdc').html('Your passwords dont match').css('color', 'red');

            e.preventDefault();
        }



    if (cfmpassword1.length == 0) {
      $("#cpwdc").css("border-color", "red").css("background-color","#ea907a");
$('#messagecpwdc').html('<span class="error"><em>Please Confirm Your Password</em></span>').css('color', 'red');
e.preventDefault();

      }

      if (addrc.length==0)
      {
        $("#addrc").css("border-color", "red").css("background-color","#ea907a");
        $('#messageaddrc').html('<span class="error"><em>Please Enter Your address</em></span>').css('color', 'red');
        e.preventDefault();

      }



      if (comid.length < 8) {
        $("#compregidhe").css("border-color", "red").css("background-color","#ea907a");
  $('#messagecid').html('<span class="error"><em>Please Enter a Valid Registration ID</em></span>').css('color', 'red');
  e.preventDefault();

        }
          var phoneno1 = /^\d{10}$/;
      var validphone1 = phoneno1.test(phonecomp);
 if(!validphone1)
       {
         $("#phonecomp").css("border-color", "red").css("background-color","#ea907a");
         $('#messagecnum').html('<span class="error"><em>Please Enter a Valid Contact Number</em></span>').css('color', 'red');
         e.preventDefault();

       }



     if (descom.length==0)
     {
       $("#descom").css("border-color", "red").css("background-color","#ea907a");
       $('#messagedescom').html('<span class="error"><em>Please Enter A Description</em></span>').css('color', 'red');

       e.preventDefault();

      }

  });

});




jQuery(function($) {

  // $("#gender").change(function () {
  //       var end = this.value;
  //       if(end=="male" ||end=="female" ||end=="other")
  //       {
  //         $("#gender").css("border-color", "#00FF00");
  //         $("#gender").css("border-color", "green").css("background-color","#90ee90");
  //         $('#messageg').html('<span class="error"><em></em></span>').css('color', 'red');
  //
  //       }
  //   });

    $("#domain").change(function () {
          var send1 = this.value;
          if(send1=="technology" ||send=="marketing" ||send=="law"||send=="arts"||send=="civil"||send=="consultancy")
          {
            $("#domain").css("border-color", "#00FF00");
            $("#domain").css("border-color", "green").css("background-color","#90ee90");
            $('#messagedomain').html('<span class="error"><em></em></span>').css('color', 'red');

          }
      });


  $("#cname").on("blur", function() {
    if ($(this).val().length == 0 && $(this).val().length < 1) {
            $("#cname").css("border-color", "red").css("background-color","#ea907a");
      $('#messagecn').html('<span class="error"><em>Please Enter Your Company Name</em></span>').css('color', 'red');

    }
  });


  $("#cname").on("keyup", function() {
    if ($(this).val().length == 0 && $(this).val().length < 1) {
            $('#messagecn').html('<span><em>Please Enter Your Company Name</em></span>').css('color', 'black');

    }
  });

  $("#cname").on("keyup", function() {
    if ($(this).val().length >= 1) {
      $("#cname").css("border-color", "#00FF00");
      $("#cname").css("border-color", "green").css("background-color","#90ee90");
      $('#messagecn').html('<span class="error"><em></em></span>').css('color', 'red');

    }

  });


$("#cname").on("blur", function() {
  if ($(this).val().length >= 1) {
    $("#cname").css("border-color", "#00FF00");
    $("#cname").css("border-color", "green").css("background-color","#90ee90");
    $('#messagecn').html('<span class="error"><em></em></span>').css('color', 'red');

      }
});


$("#cmname").on("blur", function() {
  if ($(this).val().length == 0 && $(this).val().length < 2) {
    $("#cmname").css("border-color", "red").css("background-color","#ea907a");
    $('#cmmessage').html('<span class="error"><em>Please Enter the name of your Manager</em></span>').css('color', 'red');

  }
});



$("#cmname").on("keyup", function() {
  if ($(this).val().length > 0) {
    $("#cmname").css("border-color", "#00FF00");
    $("#cmname").css("border-color", "green").css("background-color","#90ee90");
    $('#cmmessage').html('<span class="error"><em></em></span>').css('color', 'red');
  }
});

$("#cmname").on("blur", function() {
  if ($(this).val().length > 0) {
    $("#cmname").css("border-color", "#00FF00");
    $("#cmname").css("border-color", "green").css("background-color","#90ee90");
    $('#cmmessage').html('<span class="error"><em></em></span>').css('color', 'red');
      }
});

$("#cname").on("blur", function() {
  if ($(this).val().length == 0 && $(this).val().length <= 2) {
    $("#cname").css("border-color", "red").css("background-color","#ea907a");
    $('#messagecn').html('<span class="error"><em>Please Enter the name of your Manager </em></span>').css('color', 'red');

  }
});

$("#cname").on("keyup", function() {
  if ($(this).val().length <=1) {
    $("#cname").css("border-color", "red").css("background-color","#ea907a");
    $('#messagecn').html('<span class="error"><em>Please Enter the name of your Manager</em></span>').css('color', 'red');

  }
});

$("#cname").on("keyup", function() {
  if ($(this).val().length > 2) {
    $("#cname").css("border-color", "#00FF00");
    $("#cname").css("border-color", "green").css("background-color","#90ee90");
    $('#messagecn').html('<span class="error"><em></em></span>').css('color', 'red');
    }
});

$("#cname").on("blur", function() {
  if ($(this).val().length >2) {
    $("#cname").css("border-color", "#00FF00");
    $("#cname").css("border-color", "green").css("background-color","#90ee90");
    $('#messagecn').html('<span class="error"><em></em></span>').css('color', 'red');
    }
});


$("#pwdc, #cpwdc").on('focusout', function() {
  if ($('#pwdc').val().length > 2 && $('#cpwdc').val().length > 2)
   {
    if ($('#pwdc').val() == $('#cpwdc').val()) {
      $("#pwdc").css("border-color", "#00FF00");
      $("#pwdc").css("border-color", "green").css("background-color","#90ee90");
      $("#cpwdc").css("border-color", "#00FF00");
      $("#cpwdc").css("border-color", "green").css("background-color","#90ee90");
          $('#messagecpwdc').html('Your passwords match').css('color', 'green');

    } else

$('#messagecpwdc').html('<span class="error"><em>Your passwords should match</em></span>').css('color', 'red');
  }
});


$("#pwdc").on("keyup", function() {
  if ($(this).val().length < 5) {
  $("#pwdc").css("border-color", "red").css("background-color","#ea907a");
    $('#messagepwdc').html('<span class="error"><em>Min:1 lowercase, 1 uppercase, 1 digit(0,9), 1 special character, min-length(5), max-length(16)</em></span>').css('color', 'red');
}
});

$("#pwdc").on("blur", function() {
  if ($(this).val().length < 5) {
  $("#pwdc").css("border-color", "red").css("background-color","#ea907a");
    $('#messagepwdc').html('<span class="error"><em>Min:1 lowercase, 1 uppercase, 1 digit(0,9), 1 special character, min-length(5), max-length(16)</em></span>').css('color', 'red');
}
});


$("#cpwdc").on("blur", function() {
  if ($(this).val().length < 5 ) {
  $("#cpwdc").css("border-color", "red").css("background-color","#ea907a");
    $('#messagecpwdc').html('<span class="error"><em></em></span>').css('color', 'red');
}
});


$("#pwdc").on("keyup", function() {
var password = $('#pwdc').val();
var strpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var validpass=strpass.test(password);
if(validpass)
      {
        $("#pwdc").css("color", "black");
        $("#pwdc").css("border-color", "green").css("background-color","#90ee90");
        $('messagepwdc').html('<span class="error"><em>Strong Password</em></span>').css('color', 'red');
    }
});

$("#pwdc").on("blur", function() {
  if ($(this).val().length >1) {
var password1 = $('#pwdc').val();
var strpassq = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,16}$/;
var validpass=strpassq.test(password1);
if(!validpass)
      {
        $("#pwdc").css("color", "black");
          $("#pwdc").css("border-color", "red").css("background-color","#ea907a");
          $('#messagepwdc').html('<span class="error"><em>Min:1 lowercase, 1 uppercase, 1 digit(0,9), 1 special character, min-length(5), max-length(16)</em></span>').css('color', 'red');

    }
else if (!validpass){
  $("#pwdc").css("color", "black");
  $("#pwdc").css("border-color", "green").css("background-color","#90ee90");
  $('messagepwdc').html('<span class="error"><em>Strong Password</em></span>').css('color', 'red');

}
}
});

$("#pwdc").on("keyup", function() {
var password2 = $('#pwdc').val();
var strpass2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,16}$/;
var validpass2=strpass2.test(password2);
if(!validpass2)
      {
        $("#pwdc").css("color", "black");
          $("#pwdc").css("border-color", "red").css("background-color","#ea907a");
          $('#messagepwdc').html('<span class="error"><em>Min:1 lowercase, 1 uppercase, 1 digit(0,9), 1 special character, min-length(5), max-length(16)</em></span>').css('color', 'red');

    }
});


$("#emailc").on("blur", function() {
  var regEx = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
  var emailc1=$('#emailc').val();
  var svalidemailc = regEx.test(emailc1);

  if (!svalidemailc) {

  $("#emailc").css("border-color", "red").css("background-color","#ea907a");
$('#messageec').html('<span class="error"><em>Please Enter a Valid E-mail</em></span>').css('color', 'red');

}
else{
  $("#emailc").css("border-color", "green").css("background-color","#90ee90");
  $('#messageec').html('<span class="error"><em></em></span>').css('color', 'red');

}
});

$("#compregid").on("keyup", function() {
  if ($(this).val().length >1 && $(this).val().length < 8) {
    $("#compregid").css("border-color", "red").css("background-color","#ea907a");
    $('#messagecid').html('<span class="error"><em>Your Registration ID should be 8 characters</em></span>').css('color', 'red');

  }
});


$("#compregid").on("keyup", function() {
  if ($(this).val().length ==8) {
    $("#compregid").css("border-color", "#00FF00");
    $("#compregid").css("border-color", "green").css("background-color","#90ee90");
    $('#messagecid').html('<span class="error"><em></em></span>').css('color', 'red');
    }
});

$("#compregid").on("blur", function() {
  if ($(this).val().length ==8) {
    $("#compregid").css("border-color", "#00FF00");
    $("#compregid").css("border-color", "green").css("background-color","#90ee90");
    $('#messagecid').html('<span class="error"><em></em></span>').css('color', 'red');
    }
});






$("#phonecomp").on("keyup", function() {
  if ($(this).val().length >1 && $(this).val().length < 10) {
    $("#phonecomp").css("border-color", "red").css("background-color","#ea907a");
    $('#messagecnum').html('<span class="error"><em>Please Enter A Valid Phone Number</em></span>').css('color', 'red');

  }
});


$("#phonecomp").on("keyup", function() {
  if ($(this).val().length ==10) {
    $("#phonecomp").css("border-color", "#00FF00");
    $("#phonecomp").css("border-color", "green").css("background-color","#90ee90");
    $('#messagecnum').html('<span class="error"><em></em></span>').css('color', 'red');
    }
});

$("#phonecomp").on("blur", function() {
  if ($(this).val().length ==10) {
    $("#phonecomp").css("border-color", "#00FF00");
    $("#phonecomp").css("border-color", "green").css("background-color","#90ee90");
    $('#messagecnum').html('<span class="error"><em></em></span>').css('color', 'red');
    }
});

$("#addrc").on("keyup", function() {
  if ($(this).val().length > 1) {
    $("#addrc").css("border-color", "#00FF00");
    $("#addrc").css("border-color", "green").css("background-color","#90ee90");
    $('#messageaddrc').html('<span class="error"><em></em></span>').css('color', 'red');
    }
});


$("#addrc").on("blur", function() {
  if ($(this).val().length < 1) {
    $("#addrc").css("border-color", "red").css("background-color","#ea907a");
$('#messageaddrc').html('<span class="error"><em>Please Enter Your address</em></span>').css('color', 'red');
    }
});


$("#descom").on("keyup", function() {
  if ($(this).val().length > 1) {
    $("#descom").css("border-color", "#00FF00");
    $("#descom").css("border-color", "green").css("background-color","#90ee90");
    $('#messagedescom').html('<span class="error"><em></em></span>').css('color', 'red');
    }
});


$("#descom").on("blur", function() {
  if ($(this).val().length < 1) {
    $("#descom").css("border-color", "red").css("background-color","#ea907a");
$('#messagedescom').html('<span class="error"><em>Please Enter A Description</em></span>').css('color', 'red');
    }
});

$("#phonecomp").on("blur", function() {
  if ($(this).val().length < 10) {
    $("#phonecomp").css("border-color", "red").css("background-color","#ea907a");
$('#messagecnum').html('<span class="error"><em>Please Enter Your Phone Number</em></span>').css('color', 'red');
    }
});

// $("#birthday").on("blur", function() {
//       var dob1 = $('#birthday').val();
//      var year = Number(dob1.substr(0, 4));
//      var month = Number(dob1.substr(4, 2)) - 1;
//      var day = Number(dob1.substr(6, 2));
//      var today = new Date();
//      var age2 = today.getFullYear() - year;
//      if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
//        age2--;
//      }
//      {
//        $("#birthday").css("border-color", "#00FF00");
//        $("#birthday").css("border-color", "green").css("background-color","#90ee90");
//        $('#messagedob').html('<span class="error"><em></em></span>').css('color', 'red');
//
//      }
//      if(age2<16){
//      $("#birthday").css("border-color", "red").css("background-color","#ea907a");
//      $('#messagedob').html('<span class="error"><em>You have to be 16 years old</em></span>').css('color', 'red');
//      e.preventDefault();
//
//      }
// });

});
