const textareaElem = document.querySelector("[data-textarea]");
const labelElem = document.querySelector("[data-label]");

setTimeout(() => {
  textareaElem.removeAttribute("disabled");
  labelElem.textContent = "テキストエリアを有効化しました。";
}, 3000);
