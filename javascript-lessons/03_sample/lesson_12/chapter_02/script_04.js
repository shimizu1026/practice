const textElem = document.querySelector("[data-text]");
const resultElem = document.querySelector("[data-result]");

const toggleColor = () => {
  textElem.classList.toggle("red");
};

const toggleSize = () => {
  textElem.classList.toggle("large");
};

const checkColor = () => {
  const result = textElem.classList.contains("red");
  resultElem.textContent = result ? "redクラスがあります" : "redクラスはありません";
};

const checkSize = () => {
  const result = textElem.classList.contains("large");
  resultElem.textContent = result ? "largeクラスがあります" : "largeクラスはありません";
};
