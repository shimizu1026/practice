const openButton = document.querySelector('[data-command="show"]');
const dialog = document.querySelector("[data-dialog]");

// clickイベント
openButton.addEventListener("click", () => {
  dialog.show();
});
