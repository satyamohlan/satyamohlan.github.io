document.getElementById("nava").addEventListener("click",navys);
function navys() {
   if(document.getElementsByClassName("sidebar")[0].style.display ="none"){
    document.getElementsByClassName("sidebar")[0].style.display ="grid";
    document.getElementsByClassName("fa-bars")[0].className="fas fa-times";
    document.getElementsByTagName("nav")[0].style.background="black";
  }
else if(document.getElementsByClassName("sidebar")[0].style.display ="grid"){
    document.getElementsByClassName("sidebar")[0].style.display ="none";
    document.getElementById("nava").className="fa fa-bars";
}

}
