var ex = false;
var exp = $(".project-list");
var button = $('button.close');

function expand(s) {
  if (ex == false) {
    button[s].style.borderColor = 'rgb(8, 100, 161)'
    exp[s].style.display = "none";
    $("div.plus")[s].classList.remove("minus");

    ex = true;
  } else {
    button[s].style.borderColor = '#64B5F6'

    $(".project-list")[s].style.display = "flex";
    $("div.plus")[s].classList.add("minus");


    ex = false;
  }
}

if ($(document).scrollTop() == 0) {
  $("nav")[0].style.backgroundColor = "rgba(0, 0, 0,0)";

}

$(window).scroll(function () {

  if ($(document).scrollTop() < 200) {
    $("nav")[0].style.backgroundColor = "rgba(0, 0, 0," + (Math.round($(document).scrollTop() / 100) / 12) + ")";
  } else {
    $("nav")[0].style.backgroundColor = "rgba(0, 0, 0,1)";

  }
});

function play(s) {
  if (s == 1) {
    $('div.allpro').after('<div class="over"><iframe width="560" height="315" src="https://www.youtube.com/embed/8wEkiSgycrk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><a class="fas fa-times" id="nava" alt="side" onclick="pause()"></a></div>');
  }

}

function pause() {
  $('div.over').remove();
}