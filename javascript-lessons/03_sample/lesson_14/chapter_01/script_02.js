const cardElem = document.querySelector(".card");

// 浅いクローン（要素のみ、子要素は含まない）
const shallowClone = cardElem.cloneNode(false);

// 深いクローン（子要素も含めて複製）
const deepClone = cardElem.cloneNode(true);

console.log(shallowClone);
console.log(deepClone);
