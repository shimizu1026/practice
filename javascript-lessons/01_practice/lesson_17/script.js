// 要素の取得
const metaViewport = document.querySelector('meta[name="viewport"]');
const scrollLinks = document.querySelectorAll('a[href^="#"]');
// console.log(scrollLinks);
// debounce関数の実装
function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func.apply(this, args), delay);
	};
}


// ビューポートの制御
function updateViewport() {
	const threshold = 375;

	const value = window.outerWidth > threshold ? "width=device-width" : `width=${threshold}`;

	metaViewport.setAttribute("content", value);

}
// ビューポート制御のdebounce化
const debounceUpdateViewport = debounce(updateViewport, 300);

if (metaViewport) {
	// リサイズイベントの監視
	window.addEventListener("resize", debounceUpdateViewport);

	// 	初期表示
	updateViewport();
}

// スムーススクロール
scrollLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();//リンク機能無効か

		// href属性を取得
		const targetId = link.getAttribute("href");

		// 移動先の要素を取得
		const targetElement = document.querySelector(targetId);

		if (!targetElement) {
			return;//早期リターン

		}
		// シュルシュルスクロール
		targetElement.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});

	});
});
