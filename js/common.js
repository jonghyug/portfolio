$(window).on("load",function(){
  $("#title").delay(2000).animate({opacity: 0},1500).animate({width:"0"},0)
  $(".tit1").delay(500).animate({opacity:1},1000).animate({top:280},500).delay(700).animate({width:"0"},0)
  $(".tit2").delay(500).animate({opacity:1},1000).delay(1200).animate({width:"0"},0)
  $("h1").delay(2500).animate({ left:700 },500)
})
$(window).scroll(function(){
  if($("body,html").scrollTop() >= 100){
    $("#about").animate({opacity: 1},1000);
  }
})

$(window).scroll(function(){
  if($("body,html").scrollTop() >= 600){
    $("table").animate({opacity: 1},1000);
    $(".cert").animate({opacity:1},1000)
    $("#cert").addClass("hp");
    $("#top").css({opacity:1});
  } else {
    $("#top").css({opacity:0});
  }
})
$(window).scroll(function(){
  if($("body,html").scrollTop() >= 1400){
    $("#port").animate({opacity:1},1000).addClass("ht");
  }
})
$(document).ready(function(){
  $(".btn:eq(0)").on("click", function(){
    $(".btn").removeClass("on")
    $(".btn1").addClass("on")
    $(".dess").css({display:"none"})
    $(".de1").css({display:"block"})
  })
  $(".btn:eq(1)").on("click", function(){
    $(".btn").removeClass("on")
    $(".btn2").addClass("on")
    $(".dess").css({display:"none"})
    $(".de2").css({display:"block"})
  })
  $(".btn:eq(2)").on("click", function(){
    $(".btn").removeClass("on")
    $(".btn3").addClass("on")
    $(".dess").css({display:"none"})
    $(".de3").css({display:"block"})
  })
})
