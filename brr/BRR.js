

const menu = document.querySelector('#mobile_Menu');
const menuLinks = document.querySelector('.navbar_Menu');
const navLogo = document.querySelector('#navbar_Logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener ('click', mobileMenu);



const currentMenu = () => {
    const menuHighlight = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const showPage = document.querySelector('#show-page');
    const aboutPage = document.querySelector('#about-page');
    let scrollPos = window.scrollY;

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        showPage.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        showPage.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        aboutPage.classList.remove('highlight');
        return;
    }   else if (window.innerWidth > 960 && scrollPos < 2345) {
        aboutPage.classList.add('highlight');
        showPage.classList.remove('highlight');
        return;
    }

    if((menuHighlight && window.innerWidth < 960 && scrollPos < 600) || menuHighlight) {
        menuHightlight.classList.remove('.highlight');
    }

}; 


window.addEventListener('scroll', currentMenu);
window.addEventListener('click', currentMenu); 


const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}; 


menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);






