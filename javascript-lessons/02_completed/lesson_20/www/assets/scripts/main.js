// debounce関数の実装
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// ローディング
const loading = () => {
  window.addEventListener("load", () => {
    document.documentElement.setAttribute("data-loaded", "");
  });
};

// ビューポートの制御
const viewport = () => {
  // 要素の取得
  const metaViewport = document.querySelector('meta[name="viewport"]');

  // viewportの設定用関数
  const updateViewport = () => {
    const threshold = 375;

    const value = window.outerWidth > threshold ? "width=device-width" : `width=${threshold}`;

    metaViewport.setAttribute("content", value);
  };

  // debounce化されたresize処理（300ms遅延）
  const debouncedUpdateViewport = debounce(updateViewport, 300);

  // リサイズイベント
  window.addEventListener("resize", debouncedUpdateViewport);

  // 初期実行
  updateViewport();
};

// 画面表示アニメーション
const inview = () => {
  // アニメーション要素の取得
  const targets = document.querySelectorAll("[data-inview-trigger]");

  // コールバック関数
  const handleAnimation = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 要素が見えたらdata-inview="true" 属性を付与
        entry.target.setAttribute("data-inview", true);

        // 一度アニメーションしたら監視を停止（パフォーマンス向上）
        observer.unobserve(entry.target);
      }
    });
  };

  // オプション
  const options = {
    root: document,
    rootMargin: "-10% 0%",
  };

  // Intersection Observer作成
  const observer = new IntersectionObserver(handleAnimation, options);

  // 全ての要素を監視開始
  targets.forEach((element) => {
    element.setAttribute("data-inview", false);
    observer.observe(element);
  });
};

// 初期実行
loading();
viewport();
inview();
