$(document).ready(function(){
    $(".nav-icon, #close").click(function(){
      $(".sidebar").animate({
        width: "toggle"
      });
    });
    $(".nav-icon").click(function(){
      $("#l1").show(500);
      $("#l2").show(1000);
      $("#l3").show(1500);
      $("#l4").show(2000);
    });
    $("#close").click(function(){
      $("#l1").hide(2000);
      $("#l2").hide(1500);
      $("#l3").hide(1000);
      $("#l4").hide(500);
    });
  });