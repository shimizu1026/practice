const textElem = document.querySelector("[data-text]");

const setColor = () => {
  textElem.classList.add("red");
};

const setSize = () => {
  textElem.classList.add("large");
};

const setDecoration = () => {
  textElem.classList.add("border", "center", "bold");
};
