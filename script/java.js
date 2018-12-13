document.getElementById("nava").addEventListener("click",navys);
var show=false;
function navys() {
   if(show==false){
    document.getElementsByClassName("sidebar")[0].style.display ="grid";
    document.getElementById("nava").className="fas fa-times";
    document.getElementsByTagName("nav")[0].style.background="black";
    document.getElementsByClassName("div1")[0].style.position="relative";
    show=true;
    
  }
  else {

    document.getElementsByClassName("sidebar")[0].style.display ="none";
    document.getElementById("nava").className="fas fa-bars";
    document.getElementsByTagName("nav")[0].style.background="transparent";
    document.getElementsByClassName("div1")[0].style.position="absolute";
    show=false;

}

}
