const player = document.getElementById('player');
const canvas = document.getElementById('canva');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');
var x;
var y;
var byteArr;
const constraints = {
  video: true,
};

captureButton.addEventListener('click', () => {
    
  context.drawImage(player, 0, 0, canvas.width, canvas.height);
  //x=context.getImageData(0,0,canvas.width,canvas.height);
  x=convertCanvasToImage(canvas);
  y=tobin(x);
 
});

navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    // Attach the video stream to the video element and autoplay.
    player.srcObject = stream;

  });
function processImage(stream) {
    // Replace <Subscription Key> with your valid subscription key.
    var subscriptionKey = "73f95b2732df445fac4db16f7e562e4f";

    var uriBase =
        "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";

    // Request parameters.
    var params = {
        "returnFaceId": "true",
        "returnFaceLandmarks": "false",
        "returnFaceAttributes":
            "age,gender,headPose,smile,emotion," +
            "occlusion,accessories,blur,exposure,noise"
    };

    // Display the image.

    console.log(y);

    // Perform the REST API call.
    $.ajax({
        url: uriBase + "?" + $.param(params),

        // Request headers.
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/octet-stream");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },

        type: "POST",

        // Request body.
        body:[y],
  
    })

    .done(function(data) {
        // Show formatted JSON on webpage.
       console.log(data);
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        // Display error message.
        var errorString = (errorThrown === "") ?
            "Error. " : errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ?
            "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
                jQuery.parseJSON(jqXHR.responseText).message :
                    jQuery.parseJSON(jqXHR.responseText).error.message;
        alert(errorString);
    });
};
function convertCanvasToImage(canvas) {

return canvas.toDataURL("image/jpeg");

}
function tobin(x){
var dataUri =x;
var data = dataUri.split(',')[1];
var mimeType = dataUri.split(';')[0].slice(5)

var bytes = window.atob(data);
var buf = new ArrayBuffer(bytes.length);
var byteArr = new Uint8Array(buf);

for (var i = 0; i < bytes.length; i++) {
    byteArr[i] = bytes.charCodeAt(i);
}

return byteArr;
}