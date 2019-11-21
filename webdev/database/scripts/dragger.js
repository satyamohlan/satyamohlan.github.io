const target = document;

target.addEventListener('drop', (e) => {
  e.stopPropagation();
  e.preventDefault();
  act(e.dataTransfer.files[0]);
  document.getElementById('overlay').style.display='none';


});

target.addEventListener('dragover', (e) => {
  e.stopPropagation();
  e.preventDefault();

  e.dataTransfer.dropEffect = 'copy';
  document.getElementById('overlay').style.display='block';
  window.clearTimeout(dragTimer);
});
target.addEventListener('dragleave', (e) => {
    dragTimer = window.setTimeout(function() {
        e.stopPropagation();
  e.preventDefault();

  e.dataTransfer.dropEffect = 'copy';
  document.getElementById('overlay').style.display='none';
  }, 85);
 
});
