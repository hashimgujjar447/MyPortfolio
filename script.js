const header=document.querySelector("header");
window.addEventListener("scroll",function(){
 if(this.scrollY > 500)
 {
    header.classList.add("slideShow");
 }
 else{
    header.classList.remove("slideShow");
 }
})
const navButton=document.querySelector(".hamburger");
const navBar=document.querySelector(".nav-bar");
const navList=document.querySelector(".nav-list");

navButton.addEventListener("click",()=>{
   
    navButton.classList.toggle('active');
  navBar.classList.toggle("active");
  navList.classList.toggle("show-list");
})



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay :{
     delay:2500,
     disableOnInteraction:false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    rewind:false,
    breakpoints: {
      100: { // medium device breakpoint (adjust to your needs)
        slidesPerView: 1
      },
      636: { // medium device breakpoint (adjust to your needs)
        slidesPerView: 2
      }
    },
    

  });


  window.addEventListener("load",()=>{
    document.body.style.backgroundColor="black";
  })