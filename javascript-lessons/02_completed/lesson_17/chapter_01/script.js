// 要素の取得
const metaViewport = document.querySelector('meta[name="viewport"]');

// レスポンシブviewport制御
function updateViewport() {
  const threshold = 375;

  const value = window.outerWidth > threshold ? "width=device-width" : `width=${threshold}`;

  metaViewport.setAttribute("content", value);
}

// リサイズイベント
window.addEventListener("resize", updateViewport);

// 初期化
updateViewport();
