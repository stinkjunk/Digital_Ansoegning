"use strict";

const header = document.querySelector("header");
const headerspacer = document.querySelector("#headerspacer");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const invSwitch = document.querySelector(".invSwitch");
const writingCursors = document.querySelectorAll(".writingCursor");

window.addEventListener("resize", () => {
  updateSpacing();
});

invSwitch.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

function updateSpacing() {
  headerspacer.style.height = header.offsetHeight + "px";
}

writingCursors.forEach((cursor) => {
  //   cursor.style.opacity = 0;
  //   cursor.innerHTML = "|";
  //   setTimeout(() => {
  //     cursor.style.opacity = 1;
  //   }, 1000);
  cursorBlink(cursor);
});

function cursorBlink(cursor) {
  cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
  cursor.innerHTML = "_";
  setTimeout(() => cursorBlink(cursor), 500);
}

updateSpacing();

// headerspacer.offsetHeight;

//i toppen ved refresh/pageload
window.scrollTo(0, 0);