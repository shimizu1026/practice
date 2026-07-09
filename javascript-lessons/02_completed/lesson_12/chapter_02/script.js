// リモート画像のURL
const url = "https://shibajuku.net/demo/assets/images/";

// 画像の配列
const images = [
  {
    fileName: "photo-pasta.webp",
    altText: "白いお皿の上に美味しそうに盛られているボロネーゼ",
  },
  {
    fileName: "photo-chicken.webp",
    altText: "一口サイズにカットされた照り焼きチキン",
  },
  {
    fileName: "photo-salmon.webp",
    altText: "たくさんのサーモンのお刺身が乗ったサーモン丼",
  },
];

// 要素の取得
const imageElem = document.querySelector("[data-image]");

// ランダムのインデックスを作成
const index = Math.floor(Math.random() * images.length);

// img要素に属性をセット
imageElem.setAttribute("src", `${url}${images[index].fileName}`);
imageElem.setAttribute("alt", images[index].altText);

// classの操作

const toggleTheme = () => {
  document.body.classList.toggle("dark");
};
