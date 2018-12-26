document.getElementById("nava").addEventListener("click",navys);
var show=false;
function navys() {
   if(show==false){
    document.getElementsByClassName("sidebar")[0].style.display ="grid";
    document.getElementById("nava").className="fas fa-times";
   

    show=true;
    
  }
  else {

    document.getElementsByClassName("sidebar")[0].style.display ="none";
    document.getElementById("nava").className="fas fa-bars";

    show=false;

}

}
if($(document).scrollTop()==0){
  $("nav")[0].style.display="none";
}


$(window).scroll(function(){

  if($(document).scrollTop()<110&&show==false){
    console.log($(document).scrollTop());
    $("nav")[0].style.display="block";
      $("nav")[0].style.top="-"+(60-(($(document).scrollTop()/100)*60))+"px";
      $("nav")[0].style.opacity=($(document).scrollTop()/100);
  }
else{
  $("nav")[0].style.opacity=1;
  $("nav")[0].style.display="block";
  $("nav")[0].style.top=0;
}
}  
);
