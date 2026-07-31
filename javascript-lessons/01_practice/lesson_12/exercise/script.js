// data-text 属性が指定されている要素を取得
const textElem = document.querySelector("[data-text]");
// data-text 属性が指定されている要素の子要素の span 要素を全て取得
const words = textElem.querySelectorAll("span");
// html要素の data-disable-script 属性を削除
const htmlElem = document.documentElement;
htmlElem.removeAttribute("data-disable-script");
// data-disabled-script 属性の役割
// data-disable-script 属性は、JavaScriptが無効な環境をCSS側で判別できる様に指定しています。画面表示時に、JavaScriptで data-disable-script 属性を削除する命令を記述しておくことで、 data-disable-script 属性 が残っている場合は、JavaScirptが利用できない環境であると判別できます。

// この練習問題では、画面表示後、1秒経過してもhtml要素に data-disable-script 属性 が残っている場合は、JavaScript が利用できない環境と判断して、CSSアニメーションによって、.text-displayの opacity が 1 となり、JavaScript が無効な環境であっても、テキストが非表示になり続けることを防いでいます。

// 各 span 要素 にランダムな位置の translate プロパティ（インラインスタイル）をセット
words.forEach((word) => {
	const x = (Math.random() - 0.5) * 1000;
	const y = (Math.random() - 0.5) * 1000;
	word.style.setProperty("translate", `${x}px ${y}px`);

})
// console.log(words);

// 0.5秒後に、以下の命令を実行
// data-text 属性が指定されている要素にクラス is-active を指定（.text-display の opacity が 1 になる）
// 全てのspan要素の translate プロパティを 0 または、translate プロパティを削除（トランジションの定義はあらかじめCSS側で用意している）
setTimeout(() => {
	words.forEach((word) => {
		textElem.classList.add("is-active");
		word.style.removeProperty("translate");
	})

}, 500);
