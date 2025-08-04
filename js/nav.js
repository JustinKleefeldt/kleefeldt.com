//============================== HAMBURGER MENU ==============================//
let hamburgerMenuElement = undefined;
let offScreenMenuElement = undefined;

export function addEventListeners() {
  hamburgerMenuElement = document.querySelector(".js-hamburger-menu");
  offScreenMenuElement = document.querySelector(".js-off-screen-menu");

  hamburgerMenuElement.addEventListener("click", () => {
    hamburgerMenuElement.classList.toggle("active");
    offScreenMenuElement.classList.toggle("active");
  });

  /*
  hamburgerMenuElement.addEventListener("touchstart", () => {
    hamburgerMenuElement.classList.toggle("active");
    offScreenMenuElement.classList.toggle("active");
  });
  */
}
