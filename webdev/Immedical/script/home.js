if ($(document).scrollTop() == 0) {
  $('nav')[0].style.backgroundColor = 'rgba(0, 0, 0,0)';
  // $('img.me')[0].style.opacity = 1;

  // $('h1.under')[0].style.opacity = 0;
  // $('h1.under')[0].style.letterSpacing = '50px';
}


$(window).scroll(function () {
  if ($(document).scrollTop() == 0) {
    $('nav')[0].style.backgroundColor = 'rgba(0, 0, 0,0)';

  }
  var x = $(document).scrollTop();

  if (x > 300 && x < 700) {
    $('nav')[0].style.backgroundColor =
      'rgba(255, 3, 2,' + Math.round((x - 300) / 4)/100 + ')';
    console.log(Math.round((x-300)/4)/100)
  } else if (x < 300) {
    $('nav')[0].style.backgroundColor = 'rgba(255, 3, 2,0)';

  } else if (x > 700) {
    $('nav')[0].style.backgroundColor = 'rgba(255, 3, 2,1)';
    console.log('here');

  }
});

function play(s) {
  if (s == 1) {
    $('body').after('<div class="over"><video width="560" height="315" src="images/VisionPromo.mp4" autoplay controls ></video><a class="fas fa-times" id="nava" alt="side" onclick="pause()"></a></div>');
  }

}

function pause() {
  $('div.over').remove();
}
var slideIndex = [0,0];
  

// Next/previous controls
function plusSlides(n,e) {
  showSlides(slideIndex[e] += n,e);
}

// Thumbnail image controls
function currentSlide(n,e) {
  showSlides(slideIndex[e] = n,e);
}

function showSlides(n,e) {

  var i;
  var slides = document.querySelectorAll(".slideshow-container")[e].querySelectorAll('.mySlides');
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex[e] = 1}
  if (n < 1) {slideIndex[e] = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[e]-1].style.display = "block";
  dots[slideIndex[e]-1].className += " active";}
  showSlideshow1();
  showSlideshow0();
  function showSlideshow1() {
    var i;
    var slides = document.querySelectorAll(".slideshow-container")[1].querySelectorAll('.mySlides');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex[1]++;

    if (slideIndex[1] > slides.length) {slideIndex[1] = 1}
    console.log(slideIndex[1]);
   
    slides[slideIndex[1]-1].style.display = "block";
    setTimeout(showSlideshow1, 3000); // Change image every 2 seconds
  }
  function showSlideshow0() {
    var i;
    var slides = document.querySelectorAll(".slideshow-container")[0].querySelectorAll('.mySlides');
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex[0]++;
 
    if (slideIndex[0] > slides.length) {slideIndex[0] = 1}
    slides[slideIndex[0]-1].style.display = "block";
    setTimeout(showSlideshow0, 5500); // Change image every 2 seconds
  }