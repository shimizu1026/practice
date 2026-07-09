const clickElem = document.querySelector("[data-click]");
const moveElem = document.querySelector("[data-move]");
const inputElem = document.querySelector("[data-input]");
const textElem = document.querySelector("[data-text]");

// クリック
clickElem.addEventListener("click", (event) => {
  const target = event.currentTarget;
  target.textContent = "クリックしたよ";
});

// マウスムーブ
moveElem.addEventListener("mousemove", (event) => {
  const target = event.currentTarget;
  target.textContent = `${event.pageX}px × ${event.pageY}px`;
});

// インプット
inputElem.addEventListener("input", (event) => {
  textElem.textContent = event.target.value;
});
