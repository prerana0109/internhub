window.alert = function(){};
var defaultCSS = document.getElementById('bootstrap-css');
function changeCSS(css){
    if(css) $('head > link').filter(':first').replaceWith('<link rel="stylesheet" href="'+ css +'" type="text/css" />');
    else $('head > link').filter(':first').replaceWith(defaultCSS);
}
$( document ).ready(function() {
  var iframe_height = parseInt($('html').height());
  window.parent.postMessage( iframe_height, '/');
});




jQuery(function($) {
  $("#profile-tab").on("click", function() {
    $("#profile-tab").addClass("active");
    $("#home-tab").removeClass("active");
    $("#profile").addClass("active");
    $("#home").removeClass("active");

});

$("#home-tab").on("click", function() {
$("#home-tab").addClass("active");
$("#profile-tab").removeClass("active");
$("#home").addClass("active");
$("#profile").removeClass("active");

});
});
