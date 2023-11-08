
const navToggle = document.getElementById('nav-toggler');
let showMenu = false;


navToggle.addEventListener('click', function () {
    showMenu = !showMenu;
    const navMenu = document.getElementById('nav-menu');
    const menuBackground = document.getElementById('menu-background');
    const navMenuItem = document.getElementById('nav-menu-item');
    const toggleOverflow = document.body;
   

    if (showMenu) {
        // navMenu.style.display = 'block';
        menuBackground.style.display = 'block';
        navMenuItem.style.transform = 'translateX(0)';
        toggleOverflow.style.overflow = 'hidden';
    }
    else {
        // navMenu.style.display = 'none';
        menuBackground.style.display = 'none';
        navMenuItem.style.transform = 'translateX(-100%)';
        toggleOverflow.style.overflow = 'auto';
    }
})