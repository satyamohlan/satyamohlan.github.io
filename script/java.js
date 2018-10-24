document.getElementsByClassName("fa-bars")[0].addEventListener("click",navys);
function navys() {
   if(document.getElementsByClassName("sidebar")[0].style.display ="none"){
    document.getElementsByClassName("sidebar")[0].style.display ="grid";
    document.getElementById("nava").className="fas fa-times";

 }
else if(document.getElementsByClassName("sidebar")[0].style.display ="grid"){
    document.getElementsByClassName("sidebar")[0].style.display ="none";
    document.getElementById("nava").className="fa fa-bars";
}
}
