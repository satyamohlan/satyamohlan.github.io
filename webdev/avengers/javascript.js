var x=document.getElementById("time");
var y=document.getElementById("rotorh");
function myfunction(){
var d=new Date();
x.innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

}
var y=setInterval(myfunction,1000);