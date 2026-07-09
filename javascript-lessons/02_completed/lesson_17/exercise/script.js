// 要素の取得
const scrollDisplay = document.querySelector("[data-scroll-counter]");

let rect;

// debounce関数の実装
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// 位置情報の更新
const updateRect = () => {
  rect = document.body.getBoundingClientRect();
};

// スクロール用関数
const updateScroll = () => {
  const currentScroll = window.scrollY;
  const scrollHeight = rect.height - window.innerHeight;

  // 進捗の計算
  const progress = currentScroll / scrollHeight;

  // DOMに反映
  document.body.style.setProperty("--progress", progress);
  scrollDisplay.textContent = currentScroll;
};

// debounce化されたresize処理（300ms遅延）
const debouncedUpdateRect = debounce(updateRect, 300);

// イベントリスナー
window.addEventListener("scroll", updateScroll);
window.addEventListener("resize", debouncedUpdateRect);

// 初期化
updateRect();
