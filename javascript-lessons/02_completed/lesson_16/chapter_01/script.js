// 要素の取得
const drawer = document.querySelector("[data-drawer]");
const openButton = document.querySelector('[data-command="show-modal"]');

// イベントリスナー
openButton.addEventListener("click", () => {
  drawer.showModal();
});
