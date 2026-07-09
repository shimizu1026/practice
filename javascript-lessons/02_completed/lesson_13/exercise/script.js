// 要素の取得
const buttonElem = document.querySelector("[data-button]");

// ロードイベントの監視
window.addEventListener("load", () => {
  document.documentElement.setAttribute("data-status", "loaded");
});

// クリックイベントの監視
buttonElem.addEventListener("click", (event) => {
  // イベント発生要素の取得
  const currentElem = event.currentTarget;

  // なければ終了
  if (!currentElem) {
    return;
  }

  // aria-expanded 属性を boolean で取得
  const isExpanded = currentElem.getAttribute("aria-expanded") === "true";

  // aria-expanded 属性を反転して設定
  currentElem.setAttribute("aria-expanded", !isExpanded);

  // aria-controls 属性を取得
  const controlId = currentElem.getAttribute("aria-controls");

  // aria-controls 属性のIDを持つ要素の取得
  const controlElem = document.querySelector(`#${controlId}`);

  // なければ終了
  if (!controlElem) {
    return;
  }

  // aria-hidden 属性を設定
  controlElem.setAttribute("aria-hidden", isExpanded);
});
