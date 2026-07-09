// 要素の取得
const inputElem = document.querySelector("[data-input]");
const addButton = document.querySelector('[data-button="add"]');
const todoList = document.querySelector("[data-todos]");

// 追加ボタンの処理
addButton.addEventListener("click", () => {
  const inputText = inputElem.value; // 入力内容の取得

  // 入力内容が空の場合は早期リターン
  if (!inputText) {
    return;
  }

  // 要素の作成
  const todoItem = document.createElement("li");
  const deleteButton = document.createElement("button");

  // 要素の設定
  todoItem.textContent = inputText;
  deleteButton.textContent = "削除";
  deleteButton.setAttribute("type", "button");

  // 削除ボタンのイベントリスナー
  deleteButton.addEventListener("click", () => {
    todoItem.remove();
  });

  console.log(todoItem);

  // 要素の追加
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);

  inputElem.value = ""; // 入力内容をクリア
});
