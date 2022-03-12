$(".refresher").click(function () {
  $(this).children('i').toggleClass('spinner');
});

$(".showRest").click(function () {
  // $(this).parent().children('p').children('dots').toggleClass('spinner');
  var a=$(this).parent().children('p').children('.dots').css("display");

  if (a == "none") {
    $(this).parent().children('p').children('.dots').css("display", "inline");
    $(this).html('ardını oxu <i class="fa-solid fa-angles-down"></i>');
    $(this).parent().children('p').children('.more').css("display", "none");
    console.log(a);
  } else {
    $(this).parent().children('p').children('.dots').css("display", "none");
    $(this).html('gizlət <i class="fa-solid fa-angles-up"></i>');
    $(this).parent().children('p').children('.more').css("display", "inline");
    // dots.style.display = "inline";
    // console.log('contra');
    console.log(a+'`else`');
  }
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = 'ardını oxu <i class="fa-solid fa-angles-down"></i>';
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = 'gizlət <i class="fa-solid fa-angles-up"></i>';
    moreText.style.display = "inline";
  }
}