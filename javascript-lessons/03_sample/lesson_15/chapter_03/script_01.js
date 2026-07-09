const formElem = document.querySelector("[data-form]");

// submitイベント
formElem.addEventListener("submit", (event) => {
  event.preventDefault(); // フォームのデフォルト送信を防止

  if (confirm("本当に送信しますか？")) {
    formElem.submit(); // フォームを送信
  } else {
    formElem.reset(); // フォームをリセット
  }
});
