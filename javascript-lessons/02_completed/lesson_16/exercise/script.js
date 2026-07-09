// 要素の取得
const contactForm = document.querySelector('[data-form="contact"]');
const confirmDialog = document.querySelector('[data-dialog="confirm" ]');
const confirmButton = document.querySelector('[data-command="show-modal"]');
const editButton = document.querySelector('[data-command="edit"]');
const submitButton = document.querySelector('[data-command="submit"]');
const confirmName = document.querySelector('[data-confirm="name"]');
const confirmEmail = document.querySelector('[data-confirm="email"]');
const confirmMessage = document.querySelector('[data-confirm="message"]');

// イベントリスナー
confirmButton.addEventListener("click", () => {
  if (!contactForm.reportValidity()) {
    // エラーがある場合、ブラウザが自動でエラーを表示
    return;
  }

  // フォームの入力値を取得
  const formData = new FormData(contactForm); // フォームデータの取得
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // バリデーション
  if (!name || !email || !message) {
    alert("すべての項目を入力してください。");
    return;
  }

  // 確認画面に値を表示
  confirmName.textContent = name;
  confirmEmail.textContent = email;
  confirmMessage.textContent = message;

  // ダイアログを表示
  confirmDialog.showModal();
});

editButton.addEventListener("click", () => {
  confirmDialog.close();
});

submitButton.addEventListener("click", () => {
  contactForm.submit();
  confirmDialog.close();
});

// 背景クリック機能
confirmDialog.addEventListener("click", (event) => {
  // ダイアログの位置とサイズを取得
  const rect = confirmDialog.getBoundingClientRect();

  // クリック位置がダイアログの範囲外かどうかを判定
  const isOutside =
    event.clientX < rect.left || // 左端より左
    event.clientX > rect.right || // 右端より右
    event.clientY < rect.top || // 上端より上
    event.clientY > rect.bottom; // 下端より下

  // 範囲外の場合はダイアログを閉じる
  if (isOutside) {
    confirmDialog.close();
  }
});
