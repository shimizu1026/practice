const imageElem = document.querySelector("[data-image]");
const checkElem = document.querySelector("[data-check]");

checkElem.textContent = imageElem.hasAttribute("alt") ? "alt属性は存在します。" : "alt属性は存在しません。";
