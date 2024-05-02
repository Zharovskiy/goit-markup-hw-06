const orderServiceBtn = document.querySelector(".hero-image-button");
const closeModalBtn = document.querySelector(".modal-btn");
const modalWindow = document.querySelector(".backdrop");
const modalWindowContent = document.querySelector(".modal");

const burgerMenu = document.querySelector(".heder-menu-btn");
const closeMobileMenu = document.querySelector(".menu-close-btn");
// const mobileMenu = document.querySelector(".header-mob-menu");

orderServiceBtn.addEventListener("click", openCloseModalWindow);
burgerMenu.addEventListener("click", openCloseMobileMenu);

function openCloseModalWindow() {
  modalWindow.classList.toggle("is-open");
  if (modalWindow.classList.contains("is-open")) {
    closeModalBtn.addEventListener("click", openCloseModalWindow);
    document.body.style.overflow = "hidden";
    // modalWindow.style.overflow = "auto";
  } else {
    closeModalBtn.removeEventListener("click", openCloseModalWindow);
    document.body.style.overflow = "auto";
  }
}

function openCloseMobileMenu() {
  mobileMenu.classList.toggle("is-open");
  if (mobileMenu.classList.contains("is-open")) {
    closeMobileMenu.addEventListener("click", openCloseMobileMenu);
    document.body.style.overflow = "hidden";
  } else {
    closeMobileMenu.removeEventListener("click", openCloseMobileMenu);
    document.body.style.overflow = "auto";
  }
}
