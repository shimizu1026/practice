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