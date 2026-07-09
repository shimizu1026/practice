const buttonElem = document.querySelector("[data-button]");
const textElem = document.querySelector("[data-text]");

buttonElem.addEventListener("click", () => {
  textElem.textContent = "クリックされたよ！";
});
