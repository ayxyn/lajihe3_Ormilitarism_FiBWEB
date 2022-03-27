$(document).ready(function () {
  var a = 0;

  $(".post1 .imgHolder ").each(function (index) {
    a = 0;
    $(this).children("div").each(function (index) {
      a += 1;
      $(this).prepend("<span>" + a + "</span>");
    });

  });


});

$(document).click(function (event) {
  if (!$(event.target).closest(".shareIcon").length) {
    $("body").find(".shareList").removeClass("active");
  }
});


$(".refresher").click(function () {
  $(this).children('i').toggleClass('spinner');
});


$(".post1 .share .shareIcon").click(function () {
  $(this).children('.shareList').toggleClass('active');
});

$(".showRest").click(function () {
  var a = $(this).parent().children('p').children('.dots').css("display");

  if (a == "none") {
    $(this).parent().children('p').children('.dots').css("display", "inline");
    $(this).html('ardını oxu <i class="fa-solid fa-angles-down"></i>');
    $(this).parent().children('p').children('.more').css("display", "none");
    console.log(a);
  } else {
    $(this).parent().children('p').children('.dots').css("display", "none");
    $(this).html('gizlət  <i class="fa-solid fa-angles-up"></i>');
    $(this).parent().children('p').children('.more').css("display", "inline");

    console.log(a + '`else`');
  }
});


$(".post1 .icons a").click(function () {
  $(this).toggleClass('active');
  var a = $(this).children('span').text();
  if ($(this).hasClass('active')) {
    $(this).children('span').html(parseInt(a) + 1)
  } else {
    $(this).children('span').html(parseInt(a) - 1)
  }

});



// esas shekli goesteren 

$(".post1 .imgHolder div").click(function () {
  var a = $(this).children("img").attr("src");

  $(this).siblings('.w-100').css("display", "block");
  $(this).siblings('.w-100').attr("src", a);

  $(this).siblings('.w-100').attr("src", a);
  $(this).siblings().removeClass("active");

  $(this).addClass("active");


});

// navbar awcycy
$("#navOpen").click(function () {

  $("#mainNav .mainTabs").addClass("active");
});

$("#navClose").click(function () {

  $("#mainNav .mainTabs").removeClass("active");
});