// 要素の取得
const metaViewport = document.querySelector('meta[name="viewport"]');
const scrollLinks = document.querySelectorAll('a[href^="#"]');
const animateElements = document.querySelectorAll("[data-inview-trigger]");

// console.log(animateElements);
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

// スクロールアニメーション
window.addEventListener("scroll", () => {
	animateElements.forEach((element) => {
		// 要素の位置情報を取得
		const rect = element.getBoundingClientRect();
		const windowHight = window.innerHeight;

		// 要素が画面の中に入っているかをチェック
		// 要素の上からの距離がウィンドウ（－100）の高さより小さい
		// かつ、要素の下らからの距離が0より大きいとき
		if (rect.top < windowHight - 100 && rect.bottom > 0) {
			element.setAttribute("data-inview", true);

		} else {
			element.setAttribute("data-inview", false);
		}
	})
})