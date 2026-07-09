const textElem = document.querySelector("[data-text]");

const toggleColor = () => {
  textElem.classList.toggle("red");
};

const toggleSize = () => {
  textElem.classList.toggle("large");
};
