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
const imgElem = document.querySelector("[data-image]");
console.log(imgElem);

// ランダムのインデックス番号を作成
const index = Math.floor(Math.random() * images.length);
console.log(index);

// img要素のscr属性とalt属性にセット
imgElem.setAttribute("src", `${url}${images[index].fileName}`);
imgElem.setAttribute("alt", images[index].altText);

// classの操作
const toggleTheme = () => {
	document.body.classList.toggle("dark");
}
//スタイルの操作
let position = 0;//現在位置の取得

const moveImage = () => {
	position++;
	// position += 2;
	// position = position + 0.1;

	imgElem.style.setProperty("translate", `${position}px`);

	if (position < 500) {
		requestAnimationFrame(moveImage);
	}
}
// 初期の実行
moveImage();