const imgElem = document.querySelector("[data-image]");
const srcElem = document.querySelector("[data-src]");
const altElem = document.querySelector("[data-alt]");

const srcValue = imgElem.getAttribute("src");
const altValue = imgElem.getAttribute("alt");

srcElem.textContent = srcValue;
altElem.textContent = altValue;
