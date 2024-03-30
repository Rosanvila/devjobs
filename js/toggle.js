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

if (setDarkMode === "on") {
  darkModeOn();
}

darkModeToggle.addEventListener("click", () => {
  setDarkMode = localStorage.getItem("darkmode");
  if (setDarkMode !== "on") {
    darkModeOn();
    console.log(setDarkMode);
  } else {
    darkModeOff();
    console.log(setDarkMode);
  }
});
