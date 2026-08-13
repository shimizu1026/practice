// data-inview-trigger属性を持つ全ての要素を取得し、変数 targets に代入
const targets = document.querySelectorAll("[data-inview-trigger]");

//  data-section属性を持つ全ての要素を取得し、変数 sections に代入
const sections = document.querySelectorAll("[data-section]");

//  アニメーション用コールバック関数 handleAnimation を作成

const handleAnimation = () => {
  console.log("callback");
};
// 要素が見えたらdata-inview="true"属性を付与
// 一度アニメーションしたらunobserve()で監視を停止
//  セクション監視用コールバック関数 handleIntersection を作成
const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // ビューポートに入った
      console.log(entry.target);
    }
  });
};
// セクションのid属性を取得
const targetElem = document.querySelectorAll(`a[href="#${target}"]`);
// 対応するナビゲーションリンク（a[href="#セクションid"]）を取得
// 対応する画像（img[data-image="セクションid"]）を取得
const targetUImg = document.querySelectorAll('img[data-image="セクションid"]');

// セクションが見えたら対応要素にdata-current="true"を付与
entry.target.setAttribute("data-current", true);
// セクションが見えなくなったら対応要素にdata-current="false"を付与
entry.target.setAttribute("data-current", false);
//  2つのIntersection Observerを作成
// inviewObserver: rootMargin: "-10% 0%"でアニメーション用
const inviewObserver = {
  rootMargin: "-10% 0%",
};

// sectionObserver: rootMargin: "-50% 0%"でセクション監視用
const sectionObserver = {
  rootMargin: "-50% 0%",
};
//  全ての対象要素の監視を開始し、動作確認
targets.forEach((target) => {
  observer.observe(target);
});

// inviewObserverを監視する際に全てのtargets の要素に data-inview="false" 属性を付与（初期表示で非表示にする用）

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
  rootMargin: "-50% 0%", //. ビューポートの天地中央
};

// Intersection Observer作成
const observer = new IntersectionObserver(handleIntersection, options);

// 全ての要素を監視開始
sections.forEach((section) => {
  observer.observe(section);
});
