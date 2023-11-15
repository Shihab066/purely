
//this script is used to manipulate hamburger menu

const navToggle = document.getElementById('nav-toggler');
// const navMenu = document.getElementById('nav-menu');
const menuBackground = document.getElementById('menu-background');
const navMenuItem = document.getElementById('nav-menu-item');
const toggleOverflow = document.body;
let showMenu = false;


navToggle.addEventListener('click', function () {
    showMenu = !showMenu;
    menuToggle()
})

menuBackground.addEventListener('click', function () {
    navToggle.click()
})

function menuToggle() {
    if (showMenu) {
        menuBackground.style.display = 'block';
        navMenuItem.style.transform = 'translateX(0)';
        toggleOverflow.style.overflow = 'hidden';
    }
    else {
        menuBackground.style.display = 'none';
        navMenuItem.style.transform = 'translateX(-100%)';
        toggleOverflow.style.overflow = 'auto';
    }
}