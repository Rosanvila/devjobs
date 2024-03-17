const filterBtn = document.querySelector(".filter-button");
const mobileModal = document.querySelector("#modal");
const overlay = document.querySelector(".overlay");

filterBtn.addEventListener("click", () => {
  mobileModal.classList.add("modal-open");
  overlay.classList.add("overlay-open");
});

overlay.addEventListener("click", () => {
  mobileModal.classList.remove("modal-open");
  overlay.classList.remove("overlay-open");
});
