const themeElem = document.querySelector("[data-theme]");
const buttons = document.querySelectorAll("[data-button]");
const moveElem = document.querySelector("[data-move]");
const links = document.querySelectorAll("a:any-link, button");

console.log(links);

// テーマの切り替え
themeElem.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 画像の切り替え
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // 操作対象の要素を取得
    const currentTarget = event.currentTarget;
    const currentTargetId = currentTarget.getAttribute("aria-controls");
    const imageElem = document.querySelector(`#${currentTargetId}`);

    // 画像の情報を取得
    const target = event.target;
    const src = target.getAttribute("src") || "";
    const alt = target.getAttribute("alt") || "";

    imageElem.setAttribute("src", src);
    imageElem.setAttribute("alt", alt);
  });
});

// マウスストーカー
document.addEventListener("mousemove", (event) => {
  moveElem.style.translate = `${event.clientX}px ${event.clientY}px`;
});

links.forEach((link) => {
  // マウスオン
  link.addEventListener("mouseenter", () => {
    moveElem.setAttribute(`data-hover`, "true");
  });

  // マウスアウト
  link.addEventListener("mouseleave", () => {
    moveElem.setAttribute(`data-hover`, "false");
  });
});
