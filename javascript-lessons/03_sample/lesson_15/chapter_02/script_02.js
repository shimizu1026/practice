const privacyCheckbox = document.querySelector("[data-check-privacy]");
const submitButton = document.querySelector("[data-button-submit]");

// changeイベント
privacyCheckbox.addEventListener("change", (event) => {
  const isChecked = event.target.checked; // チェックボックスの状態を取得

  // チェックされている場合は送信ボタンを有効化、そうでない場合は無効化
  submitButton.disabled = !isChecked;
});
