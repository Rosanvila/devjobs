const dialogElement = document.querySelector("dialog");
const researchFilter = document.querySelector("#filter");

researchFilter.addEventListener("click", (ev) => {
  ev.stopPropagation();
  dialogElement.showModal();
});

