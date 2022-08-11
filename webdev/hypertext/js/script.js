
var header=document.getElementsByTagName('nav')[0];
var topper_image=document.querySelectorAll('div.topper div.frame')
var overlay=document.querySelectorAll('div.frame div.lay')
topper_image.forEach(i=>{
  i.addEventListener('mouseover',(e)=>{
    let index =i.getAttribute('data-index');
    console.log(index)
  overlay[index].classList.remove('underlay')
  overlay[index].classList.add('overlay')

  });
  i.addEventListener('mouseleave',(e)=>{
    let index =e.target.getAttribute('data-index');
  overlay[index].classList.remove('overlay')
  overlay[index].classList.add('underlay')

  });
});

document.addEventListener('scroll',(event)=>{
console.log(window.scrollY);
  if (window.scrollY > 200) {
    header.classList.remove('nav-max');
    header.classList.add('nav-min');

  } 
  else {
    header.classList.add('nav-max');
    header.classList.remove('nav-min');
  }

},
{ passive: true }
);
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
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    if(end==153){
      obj.innerHTML = Math.floor(progress * (end - start) + start).toString();

    }
    else{
      obj.innerHTML = (Math.floor(progress * (end - start) + start)/10).toString()+"%";

    }
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
function animate(){
const obj = document.querySelectorAll(".div1-stat>.bordered h1");
console.log(obj)
obj.forEach(i=>{
  console.log(i.getAttribute('data-number'))
  
  animateValue(i, 0, parseInt(i.getAttribute('data-number')), 2000)
   
});}
setTimeout(animate,3000)