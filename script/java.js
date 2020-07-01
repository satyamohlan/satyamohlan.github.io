document.getElementById('nava').addEventListener('click', navys);
var show = false;

function navys() {
  console.log('hi');
  if (show == false) {
    document.getElementsByClassName('sidebar')[0].style.display = 'grid';
    document.getElementById('nava').className = 'fas fa-times';

    show = true;
  } else {
    document.getElementsByClassName('sidebar')[0].style.display = 'none';
    document.getElementById('nava').className = 'fas fa-bars';

    show = false;
  }
}
if ($(document).scrollTop() == 0) {
  $('nav')[0].style.backgroundColor = 'rgba(0, 0, 0,0)';
  $('img.me')[0].style.opacity = 1;

  $('h1.under')[0].style.opacity = 0;
  $('h1.under')[0].style.letterSpacing = '50px';
}


$(window).scroll(function () {
  if ($(document).scrollTop() == 0) {
    $('nav')[0].style.backgroundColor = 'rgba(0, 0, 0,0)';
    $('img.me')[0].style.opacity = 1;

    $('h1.under')[0].style.opacity = 0;
    $('h1.under')[0].style.letterSpacing = '50px';
  }
  var x = $(document).scrollTop();
  console.log(x);
  $('img.me')[0].style.opacity = 1.2 - Math.round(x / 100) / 2.5;

  if (x > 150 && x < 350) {
    $('h1.under')[0].style.letterSpacing = (100 - (x - 150) / 2) / 2 + 'px';
    $('h1.under')[0].style.opacity = Math.round((x - 150) / 20) / 10;

  } else if (x > 350) {
    $('h1.under')[0].style.letterSpacing = '1px';
    $('h1.under')[0].style.opacity = 1;
  }
  if (x > 300 && x < 500) {
    $('nav')[0].style.backgroundColor =
      'rgba(0, 0, 0,' + Math.round(x - 300 / 100) / 12 + ')';
  } else if (x < 300) {
    $('nav')[0].style.backgroundColor = 'rgba(0, 0, 0,0)';

  } else if (x > 1000) {
    $('nav')[0].style.backgroundColor = 'rgba(0, 0, 0,1)';

  }
});