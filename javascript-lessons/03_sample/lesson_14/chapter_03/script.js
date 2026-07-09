const textElem = document.querySelector("[data-text]");
const items = document.querySelectorAll("[data-list] > li");

// 要素を削除
textElem.remove();

// 全てのli要素を削除
items.forEach((item) => item.remove());
