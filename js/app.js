
// Dynamic Navigation bar

document.addEventListener('DOMContentLoaded', function NavBar() {
  const sections = document.querySelectorAll("section");
  //  console.log(sections);

  for (const section of sections) {
    // console.log(section);

    const SectionName = section.getAttribute("data-nav");
    //  console.log(SectionName);
    const sectionID = SectionName.replace(" ", "").toLowerCase();
    // console.log(sectionID);

    let list = document.createElement("li");
    list.setAttribute("href", `#${sectionID}`);
    list.setAttribute("id", `link#${sectionID}`);
    list.innerHTML = SectionName;
    // console.log(list);

    const navbarid = document.getElementById("navbar__list");
    navbarid.appendChild(list);
    // console.log(navbarid);

    document.getElementById(`link#${sectionID}`).addEventListener("click", function (e) {
        // console.log(sectionID);
        e.preventDefault();
        Scrolling(sectionID);
      });
  }
}, false)

// Scroll to section on clicking navigation link

function Scrolling(e) {
  // console.log(e);
  const b = document.getElementById(e);
  //  console.log(b);
  b.scrollIntoView({ behavior: "smooth"});
}

// Add class 'active' to lists in Navigation Bar

document.addEventListener("DOMContentLoaded",function ActiveNavBar() {
  const navlists = document.getElementById("navbar__list");
  //  console.log(navlists);
  const lists = navlists.querySelectorAll("li");
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
},false)

// Hamburger menu for responsive mode
function Hamburger() {
  const x = document.getElementById("navbar__list");
  console.log(x.className);
  if (x.className === "navbar__menu") {
    x.className += " responsive";
    // console.log('Navbar')
  } else {
    x.className = "navbar__menu";
  }
}

// Set sections as active relative to viewport


document.addEventListener("DOMContentLoaded", function ActiveSection() {
  let n = document.querySelectorAll("section");
  //console.log(n);

  for (let i = 0; i < n.length; i++) {
    window.addEventListener("scroll", function () {
      const position = n[i].getBoundingClientRect();
      // console.log(position);
      const posit = position.top;
      // console.log(posit);

      if (posit <= this.window.innerHeight / 2) {
        const s = document.getElementsByClassName("your-active-class");
        // console.log(s.length);
        s[0].className = s[0].className.replace("your-active-class", "");

        const r = this.document.querySelectorAll("section");
        r[i].className = "your-active-class";

        const current = document.getElementsByClassName("active");
        //  console.log(current);
        if (current.length > 0) {
          current[0].className = current[0].className.replace("active", "");
        }
        const links = document
          .getElementById("navbar__list")
          .querySelectorAll("li");
        // console.log(links);
        links[i].className += "active";
      }
      // console.log(i);
    });
  }
},false)

// Back To Top Button

window.addEventListener("scroll", function () {
  const y = window.scrollY;
// console.log(y)
  if (y >= 300) {
    toTopButton.className = "to-top-show";
  } else {
    toTopButton.className = "to-top-hide";
  }
});

const toTopButton = document.querySelector("#back-to-top");
// console.log(toTopButton);

toTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
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
