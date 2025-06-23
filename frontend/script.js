// const hamburger = document.querySelector('.hamburger');
// const menu = document.querySelector('.navbar .menu');
// const closeMenu = document.querySelector('.close-menu');
// const overlay = document.querySelector('.menu-overlay');

// function openMenu() {
//     menu.classList.add('active');
//     overlay.classList.add('active');
//     document.body.style.overflow = 'hidden';
// }
// function closeSideMenu() {
//     menu.classList.remove('active');
//     overlay.classList.remove('active');
//     document.body.style.overflow = '';
// }

// hamburger.addEventListener('click', openMenu);
// hamburger.addEventListener('keydown', function (e) {
//     if (e.key === 'Enter' || e.key === ' ') openMenu();
// });
// closeMenu.addEventListener('click', closeSideMenu);
// overlay.addEventListener('click', closeSideMenu);

// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape') closeSideMenu();
// });
document.addEventListener('DOMContentLoaded', function () {
    const navbars = document.querySelectorAll('.navbar');

    navbars.forEach(navbar => {
        const hamburger = navbar.querySelector('.hamburger');
        const menu = navbar.querySelector('.menu');
        const closeMenu = navbar.querySelector('.close-menu');

        function openMenu() {
            menu.classList.add('active');
            document.querySelector('.menu-overlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeSideMenu() {
            menu.classList.remove('active');
            document.querySelector('.menu-overlay').classList.remove('active');
            document.body.style.overflow = '';
        }

        hamburger.addEventListener('click', openMenu);
        hamburger.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') openMenu();
        });

        closeMenu.addEventListener('click', closeSideMenu);

        // Close menu when any link inside this menu is clicked
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeSideMenu);
        });

        // Also close on Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeSideMenu();
        });

        // Also close on overlay click
        const overlay = document.querySelector('.menu-overlay');
        overlay.addEventListener('click', closeSideMenu);
    });
});
