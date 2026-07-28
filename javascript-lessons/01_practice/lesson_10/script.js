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

// 新しいタスクを追加
const newTask = prompt("タスクを入力");

if (newTask) {

	const newTodo = {
		id: todos.length + 1,
		task: newTask,
		isDone: false,
		priority: 3,
	}

	todos.push(todos);
}

console.log(todos);