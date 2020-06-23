var ex = false;
var exp = $(".project-list");

function expand(s) {
  if (ex == false) {
    exp[s].style.display = "none";
    $("div.plus")[s].classList.remove("minus");

    ex = true;
  } else {
    $(".project-list")[s].style.display = "flex";
    $("div.plus")[s].classList.add("minus");


    ex = false;
  }
}

if ($(document).scrollTop() == 0) {
  $("nav")[0].style.backgroundColor = "rgba(0, 0, 0,0)";

}

$(window).scroll(function () {
  console.log(Math.round($(document).scrollTop() / 100) / 10);
  if ($(document).scrollTop() < 200) {
    $("nav")[0].style.backgroundColor = "rgba(0, 0, 0," + (Math.round($(document).scrollTop() / 100) / 12) + ")";
  } else {
    $("nav")[0].style.backgroundColor = "rgba(0, 0, 0,1)";

  }
});