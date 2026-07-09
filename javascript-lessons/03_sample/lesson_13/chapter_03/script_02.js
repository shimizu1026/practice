const loadElem = document.querySelector("[data-load]");
const scrollElem = document.querySelector("[data-scroll]");
const resizeElem = document.querySelector("[data-resize]");

// ロード
window.addEventListener("load", () => {
  loadElem.textContent = "読み込み完了";
});

// スクロール
window.addEventListener("scroll", () => {
  scrollElem.textContent = `${window.scrollY}px`;
});

// リサイズ
window.addEventListener("resize", () => {
  resizeElem.textContent = `${window.innerWidth}px × ${window.innerHeight}px`;
});
