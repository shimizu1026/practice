const todos = [
	{
		id: 1,
		task: "買い物",
		isDone: false,
		priority: 2,
		createdAt: "2025-04-01T16:00",
	},
	{
		id: 2,
		task: "掃除",
		isDone: true,
		priority: 1,
		createdAt: "2025-05-24T10:30",
	},
];

// 新しいタスクを追加
const newTask = prompt("タスクを入力");

if (newTask) {
	const now = new Date();
	console.log(now.toISOString());
	const newTodo = {
		id: todos.length + 1,
		task: newTask,
		isDone: false,
		priority: 3,
		createdAt: now.toISOString(),
	}

	todos.push(newTodo);
};

// 作成日順で並び替えた新しい配列を作成
const sortedDescTodos = todos.slice().sort((a, b) => {
	return new Date(b.createdAt) - new Date(a.createdAt);
});
sortedDescTodos.forEach((todo) => {
	const { task, isDone, priority, createdAt } = todo;

	// 作成日と日本のローカル時間でフォーマット
	const formattedDate = new Date(createdAt).toLocaleString("ja-JP", {
		timeZone: "Asia/Tokyo",//日本のタイムゾーン
	});

	console.log(`${task} | ${isDone} | ${priority}|${formattedDate}`);
})
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