window.addEventListener("load", () => {
   const loader = document.querySelector(".loader");
   loader.classList.add("loader-hidden");
   loader.addEventListener("transitionend", ()=>{
       document.body.removeChild("loader");
   })
})

window.addEventListener("load", () => {
   const loader = document.querySelector(".loader");
   loader.classList.add("loader-hidden");
   loader.addEventListener("transitionend", ()=>{
       document.body.removeChild("loader");
   })
});


const mainVideo = document.querySelector('#main-Video');
const musicList = document.querySelector('.music-list');
const playlist = document.getElementById('playlist');
const AllLessons = document.querySelector('.AllLessons');
const videoTitle = document.querySelector('.title');
const ulTag = document.querySelector("ul");
AllLessons.innerHTML = `${allVideos.length} Modules`
let musicIndex = 1;
window.addEventListener('load',()=>{
   loadMusic(musicIndex);
   playingNow();
})
function playMusic(){
   mainVideo.play();
   playlist.classList.add('active')
}
function loadMusic(indexNumb){
   mainVideo.src = `${allVideos[indexNumb - 1].src}.mp4`;
   videoTitle.innerHTML = `${indexNumb}. ${allVideos[indexNumb - 1].name}`
   
}
for(let i = 0; i < allVideos.length; i++){
   let liTag = `<li li-index="${i + 1}">
      <div class="row">
         <span>${i + 1}. ${allVideos[i].name}</span>
      </div>
      <video class="${allVideos[i].id}" src="${allVideos[i].src}.mp4" style="display: none;" title="${allVideos[i].name}"></video>
      <span id="${allVideos[i].id}" class="duration"></span>
   </li>`;
   playlist.insertAdjacentHTML('beforeend',liTag); 
   let liVideoDuration = ulTag.querySelector(`#${allVideos[i].id}`)
   let liVideoTag = ulTag.querySelector(`.${allVideos[i].id}`);
   
   liVideoTag.addEventListener("loadeddata", ()=>{
      let videoDuration = liVideoTag.duration;
      let totalMin = Math.floor(videoDuration / 60);
      let totalSec = Math.floor(videoDuration % 60);
      // if totalSec is less then 10 then add 0 at the beginging
      totalSec < 10 ? totalSec = "0"+ totalSec : totalSec
      liVideoDuration.innerText = `${totalMin}:${totalSec}`;
      // adding t duration attribe which we'll use below
      liVideoDuration.setAttribute("t-duration", `${totalMin}:${totalSec}`);
   })  
}
// let's work on play particular song on click
const allLiTags = playlist.querySelectorAll('li');
function playingNow(){
   for(let j = 0; j<allVideos.length; j++){
      if(allLiTags[j].classList.contains('playing')){
         allLiTags[j].classList.remove("playing")
      }
      if(allLiTags[j].getAttribute('li-index')==musicIndex){
         allLiTags[j].classList.add('playing')
      }
      // adding onclick attribute in all li tags
      allLiTags[j].setAttribute("onclick", "clicked(this)")
   }
}
function clicked(element){
   // getting li index of particular clicked li tag
   let getIndex = element.getAttribute("li-index");
   musicIndex = getIndex;
   loadMusic(musicIndex);
   playMusic();
   playingNow();
}


function examtoggle0000(){
   var e0000= document.querySelector('.exampop0000')
   e0000.classList.toggle('active')
}
function examtoggle000(){
   var e000= document.querySelector('.exampop000')
   e000.classList.toggle('active')
}
function examtoggle00(){
   var e00= document.querySelector('.exampop00')
   e00.classList.toggle('active')
}
function examtoggle0(){
    var e0= document.querySelector('.exampop0')
    e0.classList.toggle('active')
}
function examtoggle1(){
   var e1= document.querySelector('.exampop1')
   e1.classList.toggle('active')
}
function examtoggle2(){
   var e2= document.querySelector('.exampop2')
   e2.classList.toggle('active')
}
function examtoggle3(){
   var e3= document.querySelector('.exampop3')
   e3.classList.toggle('active')
}
function examtoggle4(){
   var e4= document.querySelector('.exampop4')
   e4.classList.toggle('active')
}
function examtoggle5(){
   var e5= document.querySelector('.exampop5')
   e5.classList.toggle('active')
}
function examtoggle6(){
   var e6= document.querySelector('.exampop6')
   e6.classList.toggle('active')
}
function examtoggle11(){
   var e11= document.querySelector('.exampop11')
   e11.classList.toggle('active')
}
function examtoggle12(){
   var e12= document.querySelector('.exampop12')
   e12.classList.toggle('active')
}
function examtoggle13(){
   var e13= document.querySelector('.exampop13')
   e13.classList.toggle('active')
}
function examtoggle14(){
   var e14= document.querySelector('.exampop14')
   e14.classList.toggle('active')
}
function examtoggle15(){
   var e15= document.querySelector('.exampop15')
   e15.classList.toggle('active')
}
function examtoggle16(){
   var e16= document.querySelector('.exampop16')
   e16.classList.toggle('active')
}
function examtoggle17(){
   var e17= document.querySelector('.exampop17')
   e17.classList.toggle('active')
}
function examtoggle18(){
   var e18= document.querySelector('.exampop18')
   e18.classList.toggle('active')
}
function examtoggle19(){
   var e19= document.querySelector('.exampop19')
   e19.classList.toggle('active')
}
function examtoggle20(){
   var e20= document.querySelector('.exampop20')
   e20.classList.toggle('active')
}
function examtoggle21(){
   var e21= document.querySelector('.exampop21')
   e21.classList.toggle('active')
}function examtoggle22(){
   var e22= document.querySelector('.exampop22')
   e22.classList.toggle('active')
}
function examtoggle23(){
   var e23= document.querySelector('.exampop23')
   e23.classList.toggle('active')
}
function examtoggle24(){
   var e24= document.querySelector('.exampop24')
   e24.classList.toggle('active')
}
function examtoggle25(){
   var e25= document.querySelector('.exampop25')
   e25.classList.toggle('active')
}
function examtoggle26(){
   var e26= document.querySelector('.exampop26')
   e26.classList.toggle('active')
}
function examtoggle27(){
   var e27= document.querySelector('.exampop27')
   e27.classList.toggle('active')
}
function examtoggle28(){
   var e28= document.querySelector('.exampop28')
   e28.classList.toggle('active')
}




const swiper = new Swiper('.slider-wrapper', {

   loop: true,
   grabCursor: true,
   spaceBetween: 30,

   pagination: {
       el: '.swiper-pagination',
       clickable: true,
       dynamicBullets: true
   },

   navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
   },

   breakpoints: {
       0: {
           slidesPerView: 1
       },
       768: {
           slidesPerView: 2
       },
       1024: {
           slidesPerView: 3
       }
   }
});