const textareaElem = document.querySelector("[data-textarea]");
const counterElem = document.querySelector("[data-counter]");

// inputイベント
textareaElem.addEventListener("input", (event) => {
  const inputText = event.target.value; // 入力内容の取得

  const count = inputText.length; // 文字数の取得
  counterElem.textContent = count; // カウンターの更新

  if (count > 120) {
    counterElem.style.color = "red"; // 120文字を超えた場合は赤色に
  } else {
    counterElem.style.color = ""; // それ以外はデフォルトの色に戻す
  }
});
