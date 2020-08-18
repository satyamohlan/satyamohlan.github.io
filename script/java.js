document.getElementById('nava').addEventListener('click', navys);
var show = false;

function navys() {
  console.log('hi');
  if (show == false) {
    document.getElementsByClassName('sidebar')[0].style.display = 'grid';
    document.getElementById('nava').className = 'fas fa-times';

    show = true;
  } else {
    document.getElementsByClassName('sidebar')[0].style.display = 'none';
    document.getElementById('nava').className = 'fas fa-bars';

    show = false;
  }
}