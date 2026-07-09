const formElem = document.querySelector("[data-form]");
const confirmButton = document.querySelector("[data-button-confirm]");
const nameElem = document.querySelector("[data-name]");
const emailElem = document.querySelector("[data-email]");

// clickイベント
confirmButton.addEventListener("click", () => {
  if (!formElem.reportValidity()) {
    // エラーがある場合、ブラウザが自動でエラーを表示
    return;
  }

  const formData = new FormData(formElem); // フォームデータの取得
  const data = Object.fromEntries(formData.entries()); // オブジェクトに変換（name属性がキーとなる）

  nameElem.textContent = data.name;
  emailElem.textContent = data.email;
});
