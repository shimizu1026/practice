// 要素の取得
const textElem = document.querySelector("[data-text]");
const words = textElem.querySelectorAll("span");

// JSが使えない環境用に指定されている属性を削除
document.documentElement.removeAttribute("data-disable-script");

// translateをセットする関数
const setTranslate = (isRandom = true) => {
  let positionX = 0;
  let positionY = 0;
  words.forEach((word) => {
    if (isRandom) {
      positionX = (Math.random() - 0.5) * 1000;
      positionY = (Math.random() - 0.5) * 1000;
    }

    word.style.setProperty("translate", `${positionX}px ${positionY}px`);
  });
};

// 初期の配置
setTranslate();

// アニメーションの開始
setTimeout(() => {
  textElem.classList.add("is-active");
  setTranslate(false);
}, 500);
