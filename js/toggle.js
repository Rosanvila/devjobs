let setDarkMode = localStorage.getItem("darkmode");
const darkModeToggle = document.querySelector("#switch-theme-toggle");

darkModeOn = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "on");
};

darkModeOff = () => {
  document.body.classList.remove("darkmode");
  localStorage.removeItem("darkmode");
};

togglePosition = () => {
  setDarkMode = localStorage.getItem("darkmode");
  if (setDarkMode === "on") {
    darkModeToggle.checked = true;
    darkModeOn();
  } else {
    darkModeToggle.checked = false;
    darkModeOff();
  }
};
togglePosition();

darkModeToggle.addEventListener("click", () => {
  if (darkModeToggle.checked) {
    darkModeOn();
  } else {
    darkModeOff();
  }
});
