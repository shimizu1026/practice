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

// プロパティの削除
delete todo.priority;
console.log(todo);

// 分割代入
const { task, dueDate, isDone } = todo;
console.log(`${dueDate}までに${task}（${isDone}）`); // メールを確認する

// オブジェクトのループ
for (const key in todo) {
  console.log(`${key}: ${todo[key]}`);
}

// 配列と組み合わせ
const todos = [
  {
    task: "メールを確認する",
    dueDate: "2025-05-31",
    isDone: false,
    tags: ["仕事", "重要"],
  },
  {
    task: "会議の準備をする",
    dueDate: "2025-06-01",
    isDone: true,
    tags: ["仕事"],
  },
];

for (const todo of todos) {
  const { task, dueDate, isDone } = todo;
  console.log(`${dueDate}までに${task}（${isDone}）`);
}
