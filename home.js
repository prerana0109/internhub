
jQuery(function($) {


  $('#forbgh1').hover(function(){
      $('#forbgh1').addClass('active').css("color","black");
      $('#forbgh2').addClass('active').css("color","black");

  },function(){
      $('#forbgh1').removeClass('active').css("color","white");
      $('#forbgh2').removeClass('active').css("color","white");
  });

  $('#forbgh2').hover(function(){
      $('#forbgh1').addClass('active').css("color","black");
      $('#forbgh2').addClass('active').css("color","black");

  },function(){
      $('#forbgh1').removeClass('active').css("color","white");
      $('#forbgh2').removeClass('active').css("color","white");
  });


  $('#forbgh3').hover(function(){
      $('#forbgh3').addClass('active').css("color","black");
      $('#forbgh4').addClass('active').css("color","black");

  },function(){
      $('#forbgh3').removeClass('active').css("color","white");
      $('#forbgh4').removeClass('active').css("color","white");
  });


$('#forbgh4').hover(function(){
    $('#forbgh3').addClass('active').css("color","black");
    $('#forbgh4').addClass('active').css("color","black");

},function(){
    $('#forbgh3').removeClass('active').css("color","white");
    $('#forbgh4').removeClass('active').css("color","white");
});

});
