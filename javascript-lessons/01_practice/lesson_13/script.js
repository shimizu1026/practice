//要素の取得
const themeElem = document.querySelector("[data-theme]");
const buttons = document.querySelectorAll("[data-button]");
const moveElem = document.querySelector("[data-move]");
const links = document.querySelectorAll("a:any-link, button");
console.log(links);
// テーマの切り替え
themeElem.addEventListener("click", () => {
	document.body.classList.toggle("dark");
});

//画像の切り替え
buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		// 操作対象の要素を取得
		const currentTarget = event.currentTarget;
		// console.log(currentTarget);
		const currentTargetId = currentTarget.getAttribute("aria-controls");
		// console.log(currentTargetId);

		const imageElem = document.querySelector(`#${currentTargetId}`);
		// console.log(imageElem);

		// ボタン内の画像情報を取得
		const target = event.target;
		const src = target.getAttribute("src" || "");
		const alt = target.getAttribute("alt" || "");

		// console.log(`src:${src}|alt:${alt}`);

		// 画像の情報を更新
		imageElem.setAttribute("src", src);
		imageElem.setAttribute("alt", alt);
	});
});

// マウスストーカー
document.addEventListener("mousemove", (event) => {
	moveElem.style.translate = `${event.clientX}px ${event.clientY}px`;
});

links.forEach((link) => {
	// マウスがのったら
	link.addEventListener("mouseenter", () => {
		moveElem.setAttribute("data-hover", true);
	});
});
links.forEach((link) => {
	// マウスが離れたら
	link.addEventListener("mouseleave", () => {
		moveElem.setAttribute("data-hover", false);
	});
});