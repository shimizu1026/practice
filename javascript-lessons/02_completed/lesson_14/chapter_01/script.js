// 要素の取得
const inputElem = document.querySelector("[data-input]");
const addButton = document.querySelector('[data-button="add"]');

// 追加ボタンの処理
addButton.addEventListener("click", () => {
  const inputText = inputElem.value; // 入力内容の取得

  // 入力内容が空の場合は早期リターン
  if (!inputText) {
    return;
  }

  // 要素の作成
  const todoItem = document.createElement("li");

  // 要素の設定
  todoItem.textContent = inputText;

  console.log(todoItem);
});
