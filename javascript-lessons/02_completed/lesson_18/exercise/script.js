// 要素の取得
const targets = document.querySelectorAll("[data-inview-trigger]");
const sections = document.querySelectorAll("[data-section]");

// アニメーション用コールバック関数
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

// セクション用関数
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    // 監視要素のid属性を取得
    const targetId = entry.target.id;

    // 監視要素へのページ内リンクを持つa要素を取得
    const targetElem = document.querySelector(`a[href="#${targetId}"]`);
    const targetImage = document.querySelector(`img[data-image="${targetId}"]`);

    if (entry.isIntersecting) {
      // 要素が見えたら data-current="true" 属性を付与
      targetElem && targetElem.setAttribute("data-current", "true");
      targetImage && targetImage.setAttribute("data-current", "true");
    } else {
      // 要素が見えなくなったら data-current="false" 属性を付与
      targetElem && targetElem.setAttribute("data-current", "false");
      targetImage && targetImage.setAttribute("data-current", "false");
    }
  });
};

// オプション
const inviewOptions = {
  root: document,
  rootMargin: "-10% 0%",
};

const sectionOptions = {
  root: document,
  rootMargin: "-50% 0%",
};

// Intersection Observer作成
const inviewObserver = new IntersectionObserver(handleAnimation, inviewOptions);

const sectionObserver = new IntersectionObserver(handleIntersection, sectionOptions);

// 全ての要素を監視開始
targets.forEach((element) => {
  element.setAttribute("data-inview", false);
  inviewObserver.observe(element);
});

sections.forEach((section) => {
  sectionObserver.observe(section);
});
