const orderServiceBtn = document.querySelector(".hero-image-button");
const closeModalBtn = document.querySelector(".modal-btn");
const modalWindow = document.querySelector(".backdrop");

const burgerMenuBtn = document.querySelector(".heder-menu-btn");
const closeMobileBtn = document.querySelector(".menu-close-btn");
const mobileMenu = document.querySelector(".header-mob-menu");

orderServiceBtn.addEventListener("click", openModalWindow);
burgerMenuBtn.addEventListener("click", openMobileMenu);

function openModalWindow() {
  modalWindow.classList.add("is-open");
  closeModalBtn.addEventListener("click", closeModalWindow);
  document.body.style.overflow = "hidden";
}

function closeModalWindow() {
  modalWindow.classList.remove("is-open");
  closeModalBtn.removeEventListener("click", closeModalWindow);
  document.body.style.overflow = "auto";
}

function openMobileMenu() {
  mobileMenu.classList.add("is-open");
  closeMobileBtn.addEventListener("click", closeMobileMenu);
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu.classList.remove("is-open");
  closeMobileBtn.removeEventListener("click", closeMobileMenu);
  document.body.style.overflow = "auto";
}
