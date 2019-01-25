

if($(document).scrollTop()==0){
  $("nav")[0].style.display="none";
}

var show=false;
$(window).scroll(function(){

  if($(document).scrollTop()<110&&show==false){
    $("nav")[0].style.display="grid";
      $("nav")[0].style.top="-"+(60-(($(document).scrollTop()/100)*60))+"px";
      $("nav")[0].style.opacity=($(document).scrollTop()/100);
  }
else{
  $("nav")[0].style.opacity=1;
  $("nav")[0].style.display="grid";
  $("nav")[0].style.top=0;
}
}  
);
var i=0;
var eve =true;
var z;
function down(){
 


   if(i<110&& eve==true){ 
     z= setInterval(down, 50);
    i++; 
    $(document).scrollTop(i);
    eve=true;
 }
 else{
   eve=false;
 }

}

function transit() {
 
}