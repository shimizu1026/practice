const openButton = document.querySelector('[data-command="show-modal"]');
const closeButton = document.querySelector('[data-command="close"]');
const dialog = document.querySelector("[data-dialog]");

// ダイアログの展開
openButton.addEventListener("click", () => {
  dialog.showModal();
});

// ダイアログを閉じる
closeButton.addEventListener("click", () => {
  dialog.close();
});
