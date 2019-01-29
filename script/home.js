var i = 0;
var txt = ' aspiring web developer, designer, programmer and much more'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

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