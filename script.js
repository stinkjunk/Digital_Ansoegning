"use strict";

const goToPage2 = document.querySelector("#goToPage2");
const inverter = document.querySelector("#goToPage1");
const header = document.querySelector("header");
const headerspacer = document.querySelector("#headerspacer");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const invSwitch = document.querySelector(".invSwitch");
const writingCursors = document.querySelectorAll(".writingCursor");
const images = document.querySelectorAll("img");
const scrollDown = document.querySelector("#scrollDown");
const pageTitle = document.querySelector("#pageTitle");
const pages = document.querySelector("#pages");
const subSupTemplate = `
  Jeg brænder for at bygge
  <span class="highlight">
    fede brugeroplevelser med moderne webteknologier</span>
  - og jeg har en særlig forkærlighed for clean design, responsivt layout
  og godt kodehåndværk.
`.trim();
const subSup = document.querySelectorAll("p.sub800, p.sup800");
subSup.forEach((p) => {
  p.innerHTML = subSupTemplate;
});

goToPage2.addEventListener("click", () => {
  goToPage(2);
});
goToPage1.addEventListener("click", () => {
  goToPage(1);
});

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
  cursorBlink(cursor);
});

images.forEach((image) => {
  image.title = "Tryk på mig for at se det ubehandlede billede";

  image.addEventListener("click", () => {
    image.classList.toggle("processed");
    if (image.classList.contains("processed")) {
      // image.title = "Tryk på mig for at se det uforarbejdede billede";
      image.title = "Tryk på mig for at se det ubehandlede billede";
    } else {
      // image.title = "Tryk på mig for at slå forarbejdning til";
      image.title = "Tryk på mig for at slå filter til";
    }
  });
});

cursorBlink(scrollDown, "↴");

function cursorBlink(cursor, symbol = "_") {
  cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
  cursor.innerHTML = symbol;
  setTimeout(() => cursorBlink(cursor, symbol), 500);
}

updateSpacing();

window.addEventListener("scroll", scrollUpdater);

function scrollUpdater() {
  const percent = 0.6;
  const scrollTop = window.scrollY;
  const viewPortHeight = window.innerHeight;
  const viewPortPercent = viewPortHeight * percent;
  if (scrollTop > viewPortPercent) {
    pageTitle.classList.add("invis");
  } else {
    pageTitle.classList.remove("invis");
  }
}

function goToPage(page) {
  //Primitv, har kun 2 pages og tænker ikke på at lave flere, så er hardkoded for to pages
  console.log("page: ", page);
  if (page === 1) {
    //pages scrolles til højre:
    pages.style.transform = "translateX(50%)";
  }
  if (page === 2) {
    //pages scrolles til venstre:
    pages.style.transform = "translateX(-50%)";
    pages.classList = "transitionTiming";
  }
}

window.addEventListener("load", () => {
  goToPage(1);
});
