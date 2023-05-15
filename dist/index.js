const body = document.querySelector("body");
const darkMode = document.querySelector("#dark-mode");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const menu = document.querySelector("#menu");
const navListItems = document.querySelectorAll("#nav-list-item");
const menuListItems = document.querySelectorAll("#menu-list-item");
const hashtags = document.querySelectorAll("#nav-list-item span");

// form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwydnK2ysjTs9Mm9cEoNSd6hJCC_227GBHqdux5XBeK8YrUsPZV5rtr1u7CjTq4TCGGVQ/exec";
const form = document.forms["contact-us"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
      alert("Success!");
    })
    .catch((error) => console.error("Error!", error.message));
});

const menuToggle = () => {
  menu.classList.toggle("hidden");
};

darkMode.addEventListener("click", () => {
  body.classList.toggle("dark");
});

hamburgerIcon.addEventListener("click", menuToggle);

for (let i = 0; i < navListItems.length; i++) {
  navListItems[i].addEventListener("mouseover", () => {
    hashtags[i].classList.toggle("hidden");
  });
  navListItems[i].addEventListener("mouseout", () => {
    hashtags[i].classList.toggle("hidden");
  });
  menuListItems[i].addEventListener("click", menuToggle);
}
