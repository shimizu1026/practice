const todo = {
	task: "メールを確認する",
	dueDate: "2025-05-31",
	isDone: false,
	tags: ["仕事", "重要"]
};

console.log(todo);

// プロパティにアクセス
console.log(todo.task);

const deadline = "dueDate";
console.log(todo[deadline]);

// プロパティの変更
todo.isDone = true;
console.log(todo.isDone);

// プロパティの追加
todo.priority = "高";
console.log(todo);
