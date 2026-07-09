// オブジェクトの作成
const todo = {
  task: "メールを確認する",
  dueDate: "2025-05-31",
  isDone: false,
  tags: ["仕事", "重要"],
};

console.log(todo);

// プロパティにアクセス
console.log(todo.task); // メールを確認する

const deadline = "dueDate";
console.log(todo[deadline]); // 2025-05-31

// プロパティの変更
todo.isDone = true;
console.log(todo.isDone); // true

// プロパティの追加
todo.priority = "高";
console.log(todo);
