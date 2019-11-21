var csvdata;
const fileInput = document.getElementById('file-input');
var preview = document.getElementById('src');
fileInput.addEventListener('change', (e) => act(e.target.files[0]));
 function act(files){
  //  context.drawImage(file[0], 0, 0, canvas.width, canvas.height);
    var reader  = new FileReader();
  console.log(files);
    var type='';
  
if(files.type=='image/jpeg'||files.type=='image/png'){
    reader.onload=function(){
        var data={
            type:'img',
            data:reader.result,
            name:files.name
        }
        ref.push(data);  }
  if (files) {
    reader.readAsDataURL(files);
    type='image';
    
  }}
 
  if(files.type=='application/vnd.ms-excel'){
         
    reader.readAsText(files);
    reader.onload = function(event){
        var csv = event.target.result;
        var allTextLines = csv.split(/\r\n|\n/);
        var lines = [];
        for (var i=0; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(';');
                var tarr = [];
                for (var j=0; j<data.length; j++) {
                    tarr.push(data[j]);
                }
                lines.push(tarr);
        }
        var data={
          type:'csv',
          data:lines,
          name:files.name
        }
      console.log(JSON.stringify(data));
      ref.push(data);
    };
    reader.onerror = errorHandler;
     
    
     }
    
}
function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
  }
  function loadHandler(event) {
  
  }


