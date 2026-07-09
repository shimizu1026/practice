const textElem = document.querySelector("[data-text]");

const removeColor = () => {
  textElem.classList.remove("red");
};

const removeSize = () => {
  textElem.classList.remove("large");
};

const removeDecoration = () => {
  textElem.classList.remove("border", "center", "bold");
};
