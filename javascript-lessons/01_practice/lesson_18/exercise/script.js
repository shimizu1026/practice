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
const handleIntersection = () => {};
// セクションのid属性を取得
// 対応するナビゲーションリンク（a[href="#セクションid"]）を取得
// 対応する画像（img[data-image="セクションid"]）を取得
// セクションが見えたら対応要素にdata-current="true"を付与
// セクションが見えなくなったら対応要素にdata-current="false"を付与
//  2つのIntersection Observerを作成
// inviewObserver: rootMargin: "-10% 0%"でアニメーション用
// sectionObserver: rootMargin: "-50% 0%"でセクション監視用
//  全ての対象要素の監視を開始し、動作確認
// inviewObserverを監視する際に全てのtargets の要素に data-inview="false" 属性を付与（初期表示で非表示にする用）
