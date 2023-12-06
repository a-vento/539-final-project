const header = document.querySelector('.navbar');
const navheader = document.querySelector('.navbar-brand');
const link1 = document.querySelector('#navbarSupportedContent > ul > li:nth-child(2) > a');
const link2 = document.querySelector("#navbarSupportedContent > ul > li:nth-child(3) > a")
const link3  = document.querySelector("#navbarSupportedContent > ul > li:nth-child(4) > a")
const link4 = document.querySelector("#navbarSupportedContent > ul > li:nth-child(1) > a")
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=50) {
        header.classList.add('navbarDark');
        navheader.classList.add('navbarColor');
        link1.classList.add('navbarLinkColor');
        link2.classList.add('navbarLinkColor');
        link3.classList.add('navbarLinkColor');
        link4.classList.add('navbarLinkColor');

    }
    else {
        header.classList.remove('navbarDark');
        navheader.classList.remove('navbarColor');
        link1.classList.remove('navbarLinkColor');
        link2.classList.remove('navbarLinkColor');
        link3.classList.remove('navbarLinkColor');
        link4.classList.remove('navbarLinkColor');
    }
}

function updateNavbar() {
    const top = window.scrollY;
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) { 
        header.classList.add('navbarDark');
        navheader.classList.add('navbarColor');
        link1.classList.add('navbarLinkColor');
        link2.classList.add('navbarLinkColor');
        link3.classList.add('navbarLinkColor');
        link4.classList.add('navbarLinkColor');
    } 
}

updateNavbar();

window.onresize = function () {
    updateNavbar();
};

// the following is used from https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}