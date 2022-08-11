// const intro=document.querySelector('div.div1');
// const video=document.getElementById('background-video');
// const text=intro.querySelector('.div1-info');

// const controller= new ScrollMagic.Controller();
// let scene1= new ScrollMagic.Scene({
//   duration: 6500,
//   triggerElement: intro,
//   triggerHook:0
// }).addIndicators()
// .setPin(intro)
// .addTo(controller);

// const text_anim=TweenMax.fromTo(text,3,{opacity:1},{opacity:0});

// let scene2=new ScrollMagic.Scene({
//   duration: 3000,
//   triggerElement: intro,
//   triggerHook:0
// })
// .setTween(text_anim)
// .addTo(controller);
// let accelamount=0.05;
// let scrollpos=0;
// let delay=0;
// scene1.on('update', e=>{
//   scrollpos=e.scrollPos/1000;
//   console.log(scrollpos)
// })
// setInterval(()=>{
//   delay+=(scrollpos-delay)*accelamount;

//   console.log(delay);
//   video.currentTime=delay*2;
// // },41.6)
// const canvas=document.getElementById('hero-lightpass');
// canvas.width=1080;
// canvas.height=720;
// let frameCount=176;
// const context = canvas.getContext("2d");
// const currentFrame = function(index) {
//   return `./images/Hyper/${index.toString().padStart(4, 0)}.png`
// };

// const preloadImages = function(){
//   for (let i = 1; i < frameCount; i++) {
//     const img = new Image();
//     img.src = currentFrame(i);
//   }
// };

// const img = new Image()
// img.src = currentFrame(1);
// img.onload=function(){
//   context.drawImage(img, 0, 0);
// }
// const updateImage = index => {
//   img.src = currentFrame(index);
//   context.drawImage(img, 0, 0);
// }

// window.addEventListener('scroll', () => {  
//   const scrollTop = window.scrollY;
//   const maxScrollTop =  canvas.scrollHeight*7;
//   const scrollFraction = scrollTop / maxScrollTop;
//   if(scrollTop<6774){
//     canvas.style.position='fixed';
//   }
//   const frameIndex = Math.min(
//     frameCount - 1,
//     Math.floor(scrollFraction * frameCount)
//   );
//   requestAnimationFrame(() => updateImage(frameIndex + 1));


// });

// preloadImages();