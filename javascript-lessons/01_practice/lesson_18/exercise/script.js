// data-inview-trigger属性を持つ全ての要素を取得し、変数 targets に代入
const targets = document.querySelectorAll("[data-inview-trigger]");
//  data-section属性を持つ全ての要素を取得し、変数 sections に代入
const sections = document.querySelectorAll("[data-section]");

//  アニメーション用コールバック関数 handleAnimation を作成

const handleAnimation = (entries, observer) => {
  entries.forEach((entry) => {
    // 要素が見えたらdata-inview="true"属性を付与
    if (entry.isIntersecting) {
      entry.target.setAttribute("data-inview", true);
      // 一度アニメーションしたらunobserve()で監視を停止
      observer.unobserve(entry.target);
    }
  });
};

//  セクション監視用コールバック関数 handleIntersection を作成
const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    // セクションのid属性を取得
    const targetId = entry.target.getAttribute("id");

    // 対応するナビゲーションリンク（a[href="#セクションid"]）を取得
    const targetElem = document.querySelectorAll(`a[href="#${targetId}"]`);

    // 対応する画像（img[data-image="セクションid"]）を取得
    const targetUImg = document.querySelectorAll(
      `img[data-image="${targetId}"]`,
    );

    if (entry.isIntersecting) {
      // セクションが見えたら対応要素にdata-current="true"を付与
      entry.target.setAttribute("data-current", true);
    } else {
      // セクションが見えなくなったら対応要素にdata-current="false"を付与
      entry.target.setAttribute("data-current", false);
    }
  });
};

// inviewObserver: rootMargin: "-10% 0%"でアニメーション用
const inviewOptions = {
  rootMargin: "-10% 0%",
};

// sectionObserver: rootMargin: "-50% 0%"でセクション監視用
const sectionOptions = {
  rootMargin: "-50% 0%",
};

//  2つのIntersection Observerを作成
const inviewObserver = new IntersectionObserver(handleAnimation, inviewOptions);
const sectionObserver = new IntersectionObserver(
  handleIntersection,
  sectionOptions,
);

//  全ての対象要素の監視を開始し、動作確認
targets.forEach((target) => {
  inviewObserver.observe(target);
});

// inviewObserverを監視する際に全てのtargets の要素に data-inview="false" 属性を付与（初期表示で非表示にする用）
targets.forEach((target) => {
  target.target.setAttribute("data-inview", false);
});
