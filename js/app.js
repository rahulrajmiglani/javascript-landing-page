


 document.addEventListener("DOMContentLoaded", NavBar, false);
 document.addEventListener("DOMContentLoaded", ActiveNavBar, false);
 document.addEventListener("DOMContentLoaded", ActiveSection, false);

 
 // Dynamic Navigation bar
 
 function NavBar() {
   const section = document.querySelectorAll("section");
   // console.log(section);
 
   for (let i = 0; i < section.length; i++) {
     const li = document.createElement("li");
     const a = document.createElement("a");
 
     const sectionName = section[i].getAttribute("data-nav");
     //  console.log(sectionName);
     const sectionNamePart = sectionName.replace(/\s/g, "").toLowerCase();
     // console.log(sectionNamePart);
     li.setAttribute("href", "#" + sectionNamePart);
     li.setAttribute("id", "linkNumber" + [i + 1]);
     li.innerText = sectionName;
 
     document.getElementById("navbar__list").appendChild(li);
     document.getElementById("linkNumber" + [i + 1]).addEventListener("click", () => {
         Scrolling(i + 1);
       });
   }
 }
 
 // Add class 'active' to lists in Navigation Bar
 
 function ActiveNavBar() {
   var navlists = document.getElementById("navbar__list");
   //  console.log(navlists);
   var lists = navlists.querySelectorAll("li");
   // console.log(lists);
 
   for (let i = 0; i < lists.length; i++) {
     lists[i].addEventListener("click", function () {
       let current = document.getElementsByClassName("active");
       //  console.log(current);
 
       //   remove active class after the link is inactive
       if (current.length > 0) {
         current[0].className = current[0].className.replace("active", "");
       }
       this.className += "active";
     });
   }
 }
 
 // Hamburger menu for responsive mode
 function Hamburger() {
   var x = document.getElementById("navbar__list");
   console.log(x.className);
  if (x.className === "navbar__menu") {
     x.className += " responsive";
   } else {
     x.className = "navbar__menu";
   }
 } 


 // Scroll to section on clicking navigation link
 
 function Scrolling(e) {
   // console.log(event);
   const b = document.getElementById("section" + e);
   const pos = b.offsetTop;
   //  console.log(pos);
   window.scrollTo({
     left: 0,
     top: pos,
     behavior: "smooth",
   });
 }
 
 // Set sections as active relative to viewport
 
 function ActiveSection() {
   let n = document.querySelectorAll("section");
 
   for (let i = 0; i < n.length; i++) {
     window.addEventListener("scroll", function () {
       const position = n[i].getBoundingClientRect();
       // console.log(position);
       const posit = position.top;
       // console.log(posit);
 
       if (posit <= this.window.innerHeight / 2) {
         var s = document.getElementsByClassName("your-active-class");
         // console.log(s.length);
         s[0].className = s[0].className.replace("your-active-class", "");
 
         var r = this.document.querySelectorAll("section");
         r[i].className = "your-active-class";
 
         var current = document.getElementsByClassName("active");
         //  console.log(current);
         if (current.length > 0) {
           current[0].className = current[0].className.replace("active", "");
         }
         var links = document
           .getElementById("navbar__list")
           .querySelectorAll("li");
         // console.log(links);
         links[i].className += "active";
       }
       // console.log(i);
     });
   }
 }
 
 // Back To Top Button
 
const backToTop = function(){
     const y = window.scrollY;
 
     if(y>=300){
         toTopButton.className = 'to-top-show';
     } else{
         toTopButton.className = 'to-top-hide';
     }
 }
 
 window.addEventListener('scroll', backToTop);
 
 const toTopButton = document.querySelector('#back-to-top');
 // console.log(toTopButton);
 
 toTopButton.addEventListener('click', () => {
 
     window.scrollTo({
         top:0,
         left:0,
         behavior: 'smooth'
     });
 });

//  const toTopButton = document.querySelector("#back-to-top");
 
//  window.onscroll = function () {
//    scrollFunction();
//  };
 
//  function scrollFunction() {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//      toTopButton.className = "to-top-show";
//    } else {
//      toTopButton.className = "to-top-hide";
//    }
//  }
//  window.addEventListener("click", () => {
//    window.scrollTo({
//      top: 0,
//      left: 0,
//      behavior: "smooth",
//    });
//  });
 
 
 