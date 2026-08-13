// 要素の取得
const targets = document.querySelectorAll("[data-inview-trigger]");

// console.log(targets);

// コールバック関数
const handleAnimation = (entries, observer) => {
  // console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // ビューポートに入ったら、"data-inview=true"を付ける
      // console.log(entry.target);
      entry.target.setAttribute("data-inview", true);
    }
  });
};

// オプション
const options = {
  rootMargin: "-25% 0%",
};

// Intersection Observer(監視員)を作成
const observer = new IntersectionObserver(handleAnimation, options);

// すべての要素を監視開始
targets.forEach((target) => {
  observer.observe(target);
});
