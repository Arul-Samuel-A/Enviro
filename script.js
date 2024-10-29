const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');


menuIcon.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});

