var ex = false;
var exp = $(".project-list");

function expand(s) {
  if (ex == false) {
    exp[s].style.display = "none";
    $("div.plus")[s].classList.remove("minus");

    ex = true;
  } else {
    $(".project-list")[s].style.display = "inline-block";
    $("div.plus")[s].classList.add("minus");


    ex = false;
  }
}