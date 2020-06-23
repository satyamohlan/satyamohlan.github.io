document.getElementById("nava").addEventListener("click", navys);
var show = false;

function navys() {
  console.log("hi");
  if (show == false) {
    document.getElementsByClassName("sidebar")[0].style.display = "grid";
    document.getElementById("nava").className = "fas fa-times";


    show = true;

  } else {

    document.getElementsByClassName("sidebar")[0].style.display = "none";
    document.getElementById("nava").className = "fas fa-bars";

    show = false;

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