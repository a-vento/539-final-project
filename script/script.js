const header = document.querySelector('.navbar');

window.onscroll = function() {
    const top = window.scrollY;
    if(top >=50) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

function updateNavbar() {
    const top = window.scrollY;
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) { // Adjust the breakpoint based on your mobile view
        header.classList.add('navbarDark');
    } else {
        if(top >=0) {
            header.classList.add('navbarDark');
        }
        else {
            header.classList.remove('navbarDark');
        }
    }
}

// Initial call to set the navbar class based on the initial state
updateNavbar();

// Update the navbar when the window is resized
window.onresize = function () {
    updateNavbar();
};