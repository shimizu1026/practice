const openButton = document.querySelector('[data-command="show-modal"]');
const dialog = document.querySelector("[data-dialog]");

// clickイベント
openButton.addEventListener("click", () => {
  dialog.showModal();
});
