//  Variables
 const hamburger = document.querySelector(".hamburger");
 const navMenu = document.querySelector(".nav-menu");

// slider menu 
 hamburger.addEventListener("click", mobileMenu);

 function mobileMenu(){
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
 }

// //  Sticky nav bar


// let sticky = navbar.offsetTop;

// function scrollFunction(){
//     if(window.pageYOffset>= sticky){
//         navBar.classList.add("sticky")
//     }else{
//         navBar.classList.remove("sticky");
//     }
// }

// window.onscroll = function(){
//     scrollFunction();
// }

// window.addEventListener("scroll", ()=>{
// const navBar = document.querySelector(".navbar");
  
//     navBar.classList.toggle("sticky", window.scrollY > 0 )
// })