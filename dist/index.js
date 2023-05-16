const body = document.querySelector("body");
const darkMode = document.querySelector("#dark-mode");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const menu = document.querySelector("#menu");
const navListItems = document.querySelectorAll("#nav-list-item");
const menuListItems = document.querySelectorAll("#menu-list-item");
const hashtags = document.querySelectorAll("#nav-list-item span");
const projectsCount = document.querySelector("#projects-count");
const linesCount = document.querySelector("#lines-count");
const questionsCount = document.querySelector("#questions-count");

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

let projectCount = 1;
let lineCount = 10;
let questionCount = 5;

setInterval(() => {
  if (projectCount <= 25) {
    projectsCount.textContent = projectCount;
    projectCount++;
  }
}, 50);

setInterval(() => {
  if (lineCount <= 10000) {
    linesCount.textContent = lineCount;
    lineCount += 30;
  }
}, 1);

setInterval(() => {
  if (questionCount <= 350) {
    questionsCount.textContent = questionCount;
    questionCount += 5;
  }
}, 10);
