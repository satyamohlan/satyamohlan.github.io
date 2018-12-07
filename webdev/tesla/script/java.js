function myfunction(){
console.log(loadJSON('https://samples.openweathermap.org/data/2.5/weather?q=London&appid=41762d2ed6153a4498eb1c5c17ec847f'));
}
window.onload=function(){
    myfunction();
}