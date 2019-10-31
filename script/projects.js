var ex=false;
var exp=  $(".project-list");
function expand(s){
if(ex==false){
 exp[s].style.display="none";
 $("div.plus")[s].classList.remove("minus");

      ex=true;
    }
else{
    $(".project-list")[s].style.display="grid";
    $("div.plus")[s].classList.add("minus");


    ex=false;
}}
$(window).on('load', function(){
    $.instagramFeed({
      'username': 'Ohlansatyam',
      'container': "#instagram-feed1",    
      'display_profile': true,
      'display_biography': true,
      'display_gallery': true,
      'get_raw_json': true,

      'callback': null,
      'styling': false,
      'items': 80,
      'items_per_row': 1,
      'margin': 1 
  
    })});
    
  