var username;
var keys;
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  var dragTimer;
  function main(){
var firebaseConfig = {
 apiKey: "AIzaSyCpCItZb01X90OsRYbaS4w7161qspOdByU",
 authDomain: "quickstart-1570945551367.firebaseapp.com",
 databaseURL: "https://quickstart-1570945551367.firebaseio.com",
 projectId: "quickstart-1570945551367",
 storageBucket: "quickstart-1570945551367.appspot.com",
 messagingSenderId: "143171952809",
 appId: "1:143171952809:web:a2d873f0cf9d2465f089b8",
 measurementId: "G-X8DSDS2J6Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);
y=firebase.database();
username=getCookie('username');
if(username==''){
    window.location.replace("index.html");

}
else{
    console.log(username);
}
ref=y.ref('users/files/'+username);
ref.on('value',gotData,errData);
}
function gotData(Data){
    var users=Data.val();
     keys=Object.keys(users);
    console.log(keys);
    document.getElementById('user-content').innerHTML='';
    for(var i=0;i<keys.length;i++){
      var k=keys[i];
      var data=users[k].data;
      var type=users[k].type;
      var name=users[k].name;
      var div = document.createElement("div");
      div.className='content-item';
      document.getElementById('user-content').appendChild(div);
      var img = document.createElement("img");  
      if(type=='img'){               // Create a <p> element
      img.src=data;}
      if(type=='csv'){
        img.src='sheet.svg';
    }
      img.className='imag';
      
      document.getElementsByClassName("content-item")[i].appendChild(img);
    
      var h3 = document.createElement("p");
      h3.textContent=name;
      document.getElementsByClassName('content-item')[i].appendChild(h3);
      var button1 = document.createElement("a");
      button1.innerHTML='download';
      button1.href=img.src;
      button1.download=name;
      button1.className='down';
      document.getElementsByClassName('content-item')[i].appendChild(button1);
      var button2 = document.createElement("button");
      button2.innerHTML='delete';
      button2.className='del';
      document.getElementsByClassName('content-item')[i].appendChild(button2);

      
      
      var modal = document.getElementById("myModal");



var img = document.getElementsByClassName("imag")[i];
var btn2 = document.getElementsByClassName("del")[i];
btn2.addEventListener('click',function(){
  ref.child(keys[keys.length-i]).remove();
});
var modalImg = document.getElementById("img01");
var text = document.getElementById("txt");

var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  if(type=="img"){
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
text='';

}

if(type=='csv'){
  text=data;
  modalImg.src='';
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
}

}}


      function errData(err){
        console.log(err);
      }