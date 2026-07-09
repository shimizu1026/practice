const todos = [
  {
    id: 1,
    task: "買い物",
    isDone: false,
    priority: 2,
  },
  {
    id: 2,
    task: "掃除",
    isDone: true,
    priority: 1,
  },
];

// タスクの追加
const newTask = prompt("新しいタスクを入力してください。");
if (newTask) {
  const newTodo = {
    id: todos.length + 1,
    task: newTask,
    isDone: false,
    priority: 3, // デフォルトの優先度
  };
  todos.push(newTodo);
}

// 逆順にした新しい配列を作成
const reversedTodos = todos.slice().reverse();
reversedTodos.forEach((todo) => {
  const { task, isDone, priority } = todo;
  console.log(`${task} | ${isDone ? "完了" : "未完了"} | ${priority}`);
});

// 優先度で並べ変えた新しい配列を作成（
const sortedTodos = todos.slice().sort((a, b) => {
  return a.priority - b.priority;
});

sortedTodos.forEach((todo) => {
  const { task, isDone, priority } = todo;
  console.log(`${task} | ${isDone ? "完了" : "未完了"} | ${priority}`);
});

// タスク名だけの配列を作成
const taskNames = todos.map((todo) => todo.task);
console.log(taskNames.join(", "));

// 完了のタスクをフィルタリング
const doneTodos = todos.filter((todo) => todo.isDone);
doneTodos.forEach((todo) => {
  const { task, isDone, priority } = todo;
  console.log(`${task} | ${isDone ? "完了" : "未完了"} | ${priority}`);
});

// 「買い物」が含まれるタスクを取得
const shoppingTodo = todos.find((todo) => todo.task.includes("買い物"));
console.log(shoppingTodo);

// 未完了のタスクの合計値
const notDoneCount = todos.reduce((count, todo) => {
  return count + (todo.isDone ? 0 : 1);
}, 0);
console.log(`未完了のタスク数: ${notDoneCount}`);
