const scroll = document.querySelector("[data-scroll-counter]");
const bodyElem = document.body;

// data-scroll-counter属性の要素に現在のスクロール量が表示されるようにする
window.addEventListener("scroll", () => {
	const scrollY = window.scrollY;
	scroll.textContent = scrollY;
	//  body 要素にCSSカスタムプロパティ --progress をスクロールの進捗度に合わせて 0 ~ 1 を指定する
	const progress = scrollY / bodyHight;
	bodyElem.style.setProperty("--progress", progress);

});

//  body 要素の位置情報やサイズを取得し、スクロールの最大値を計算する
let rect = bodyElem.getBoundingClientRect();
let bodyHight = rect.height - window.innerHeight;

//  ウインドウリサイズ時に、body 要素の位置情報やサイズを再取得する（debounceを使用）


const updateRect = () => {
	rect = bodyElem.getBoundingClientRect();
	bodyHight = rect.height - window.innerHeight;
}

function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func.apply(this, args), delay);
	};
}

const debounceUpdateRect = debounce(updateRect, 300);
window.addEventListener("resize", () => {
	debounceUpdateRect();
});
