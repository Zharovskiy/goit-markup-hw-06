const orderServiceBtn = document.querySelector('.hero-image-button');
const closeModalBtn = document.querySelector('.modal-btn');
const modalWindow = document.querySelector('.backdrop');

const burgerMenu = document.querySelector('.heder-menu-btn');
const closeMobileMenu = document.querySelector('.menu-close-btn');
const mobileMenu = document.querySelector('.header-mob-menu');

orderServiceBtn.addEventListener('click', openCloseModalWindow);
burgerMenu.addEventListener('click', openCloseMobileMenu);

function openCloseModalWindow() {
    modalWindow.classList.toggle('is-open');
    if(modalWindow.classList.contains('is-open')) {
      closeModalBtn.addEventListener('click', openCloseModalWindow);
    } else {
      closeModalBtn.removeEventListener('click', openCloseModalWindow);
    }
}

function openCloseMobileMenu() {
    mobileMenu.classList.toggle('is-open');
    if(mobileMenu.classList.contains('is-open')) {
      closeMobileMenu.addEventListener('click', openCloseMobileMenu);
    } else {
      closeMobileMenu.removeEventListener('click', openCloseMobileMenu);
    }
}