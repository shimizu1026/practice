// セクションの取得
const sections = document.querySelectorAll("[data-section]");

// コールバック関数
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    // 監視要素のid属性を取得（entry.target.getAttribute("id") でもOK）
    const targetId = entry.target.id;

    // 監視要素へのページ内リンクを持つa要素を取得
    const targetElem = document.querySelector(`a[href="#${targetId}"]`);

    if (entry.isIntersecting) {
      // 要素が見えたら data-current="true" 属性を付与
      targetElem.setAttribute("data-current", "true");
    } else {
      // 要素が見えなくなったら data-current="false" 属性を付与
      targetElem.setAttribute("data-current", "false");
    }
  });
};

// オプション
const options = {
  root: document,
  rootMargin: "-50% 0%", //. ビューポートの天地中央
};

// Intersection Observer作成
const observer = new IntersectionObserver(handleIntersection, options);

// 全ての要素を監視開始
sections.forEach((section) => {
  observer.observe(section);
});
