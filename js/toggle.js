let setDarkMode = localStorage.getItem("darkmode");
const darkModeToggle = document.querySelector("#switch-theme-toggle");

darkModeOn = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "on");
};

darkModeOff = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "off");
};

togglePosition = () => {
  setDarkMode = localStorage.getItem("darkmode");
  if (setDarkMode === "on") {
    darkModeToggle.checked = true;
    darkModeOn();
  } else {
    window.matchMedia("(prefers-color-scheme: dark)").matches && !setDarkMode ?
    (darkModeToggle.checked = true, darkModeOn()) :
    (darkModeToggle.checked = false, darkModeOff());
  
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
