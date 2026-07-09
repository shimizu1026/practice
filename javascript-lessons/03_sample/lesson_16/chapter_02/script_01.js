const openButton = document.querySelector('[data-command="show-modal"]');
const dialog = document.querySelector("[data-dialog]");

// ダイアログの展開
openButton.addEventListener("click", () => {
  dialog.showModal();
});
