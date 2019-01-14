var x=document.getElementById("time");

var dob=document.getElementById("bday");
var myfunction=function (){
var bday=new Date(2005,05,20,21,45,0);
var d=new Date();
var age=(d.getTime()-bday.getTime());
var nbday=new Date(2019,05,20,21,45,0);
var agey=(age/(1000*60*60*24*365.25)).toFixed(1);
var agem=(age/(1000*60*60*24*12)).toFixed();
var aged=(age/(1000*60*60*24)).toFixed(0);
var ageh=(age/(1000*60*60)).toFixed(0);
var agemn=(age/(1000*60)).toFixed(0);
var ages=(age/(1000)).toFixed(0);
x.innerHTML=agey+" Years<br>"+agem+" Months<br>"+aged+" Days<br>"+ageh+" Hours <br>"+agemn+" Minutes<br>"+ages+" Seconds";
x.style.textAlign="center";
}



function bde(){
    var nbday;
console.log(dob);
}
 