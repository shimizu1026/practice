const drawer = document.querySelector("[data-drawer]");
const openButton = document.querySelector('[data-command="show-modal"]');
const closeButton = document.querySelector('[data-command="close"]');

// イベントリスナー
openButton.addEventListener("click", () => {
	drawer.showModal();
})
closeButton.addEventListener("click", () => {
	drawer.close();
})

// 背景クリック機能
drawer.addEventListener("click", (event) => {
	console.log(event.clientX);
})

// ダイアログの位置とサイズを取得
const rect