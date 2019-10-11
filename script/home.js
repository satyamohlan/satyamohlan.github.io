var i = 0;
var txt = ' Aspiring web developer,Tech Enthusiast, programmer and much more'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */
var data
typeWriter();
function typeWriter() {
  if (i < txt.length) {
    if(i>0){
    $(".name h3")[0].innerHTML += txt.charAt(i)+"";
    i++;
    setTimeout(typeWriter, speed);
  }
  else{
      
    setTimeout(typeWriter,2500);
    i++;
  }}
}


$(window).on('load', function(){
  $.instagramFeed({
    'username': 'Ohlansatyam',
    'container': "#instagram-feed1",    
    'display_profile': true,
    'display_biography': true,
    'display_gallery': true,
    'get_raw_json': false,
    'callback': null,
    'styling': true,
    'items': 8,
    'items_per_row': 4,
    'margin': 1 

  })});
  

