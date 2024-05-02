const openModalBtn = document.querySelector(".hero-image-button");
const closeModalBtn = document.querySelector(".modal-btn");
const backdrop = document.querySelector(".backdrop");

const openMenuBtn = document.querySelector(".heder-menu-btn");
const closeMenuBtn = document.querySelector(".menu-close-btn");
const mobileMenu = document.querySelector(".header-mob-menu");

openModalBtn.addEventListener("click", onOpenModalWindow);
openMenuBtn.addEventListener("click", onOpenMobileMenu);

function onOpenModalWindow() {
  backdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
  backdrop.style.overflow = "auto";
  backdrop.addEventListener("click", onBackdrop);
  window.addEventListener("keydown", onEsc);
  closeModalBtn.addEventListener("click", onCloseModalWindow);
}

function onCloseModalWindow() {
  backdrop.classList.remove("is-open");
  document.body.style.overflow = "auto";
  backdrop.style.overflow = "hidden";
  backdrop.removeEventListener("click", onBackdrop);
  window.removeEventListener("keydown", onEsc);
  closeModalBtn.removeEventListener("click", onCloseModalWindow);
}

function onEsc(event) {
  if (event.key === "Escape") {
    onCloseModalWindow();
  }
}

function onBackdrop(event) {
  if (event.target === backdrop) {
    onCloseModalWindow();
  }
}

function onOpenMobileMenu() {
  mobileMenu.classList.add("is-open");
  document.body.style.overflow = "hidden";
  closeMenuBtn.addEventListener("click", onCloseMobileMenu);
}

function onCloseMobileMenu() {
  mobileMenu.classList.remove("is-open");
  document.body.style.overflow = "auto";
  closeMenuBtn.removeEventListener("click", onCloseMobileMenu);
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && mobileMenu.classList.contains("is-open")) {
    onCloseMobileMenu();
  }
});
