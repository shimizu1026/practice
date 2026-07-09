// アニメーション要素の取得
const inviewElements = document.querySelectorAll("[data-inview-trigger]");

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
  rootMargin: "-30%",
};

// Intersection Observer作成
const observer = new IntersectionObserver(handleAnimation, options);

// 全ての要素を監視開始
inviewElements.forEach((element) => {
  observer.observe(element);
});
