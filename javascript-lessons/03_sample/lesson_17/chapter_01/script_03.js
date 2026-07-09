const metaViewport = document.querySelector('meta[name="viewport"]');

// レスポンシブviewport制御
function updateViewport() {
  const threshold = 375;
  const value = window.outerWidth > threshold ? "width=device-width" : `width=${threshold}`;
  metaViewport.setAttribute("content", value);
}

// debounce関数の実装
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// viewport制御をdebounce化（300ms遅延）
const debouncedUpdateViewport = debounce(updateViewport, 300); // [!code ++]

// debounce化された関数をイベントリスナーに設定
window.addEventListener("resize", debouncedUpdateViewport);

// 初期化
updateViewport();
