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

	todos.push(newTodo);
};

// console.log(todos);

// 逆順にした新しい配列をつくる
const reveredTodos = todos.slice().reverse();
reveredTodos.forEach((todo) => {
	const { task, isDone, priority } = todo;
	console.log(`${task} | ${isDone} | ${priority}`);
})
// const reveredTodos = copy.reverse();

// console.log(reveredTodos);

// タスク名だけの配列を作成
const taskNames = todos.map(todo => todo.task);
console.log(taskNames.join(", "));

// 完了したタスクをフィルタリングする
const doneTodos = todos.filter(todo => todo.isDone);
doneTodos.forEach((todo) => {
	const { task, isDone, priority } = todo;
	console.log(`${task} | ${isDone} | ${priority}`);
})

// 