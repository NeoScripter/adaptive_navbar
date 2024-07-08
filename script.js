const themeswitch = document.querySelector(".navbar__themeswitch");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

themeswitch.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});

const navicon = document.querySelector(".navbar__navicon");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");

navicon.onclick = function (e) {
  navbar.classList.toggle("active")
  body.classList.toggle("h-0")
};

const logotype = document.querySelector(".navbar__logo");

themeswitch.onclick = function (e) {
  themeswitch.classList.toggle("active")
  logotype.classList.toggle("active")
};