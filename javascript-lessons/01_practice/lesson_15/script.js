const todoData = [
	{
		title: "提案書の提出",
		category: "仕事",
		priority: "高",
		dueDate: "2025-07-18",
		isDone: false,
	},
	{
		title: "ゲームの返却",
		category: "プライベート",
		priority: "中",
		dueDate: "2025-07-20",
		isDone: true,
	},
	{
		title: "本を返却",
		category: "プライベート",
		priority: "低",
		dueDate: "2025-07-25",
		isDone: false,
	},
];

// 要素の取得
const tableBodyElem = document.querySelector("[data-table-body]");
const searchElem = document.querySelector("[data-search]");
// console.log(searchElem);

// Todoをテーブルに追加する関数
const displayTodo = (todos) => {
	// 既存の行をクリア
	tableBodyElem.innerHTML = "";

	// Todo配列をループして行を作成
	todos.forEach((todo) => {
		// 要素の作成
		const row = document.createElement("tr");
		const titleCell = document.createElement("td");
		const categoryCell = document.createElement("td");
		const priorityCell = document.createElement("td");
		const dueDateCell = document.createElement("td");
		const isDoneCell = document.createElement("td");

		// 内容を設定
		const { title, category, priority, dueDate, isDone } = todo;
		// console.log(todo.category);
		titleCell.textContent = title;
		categoryCell.textContent = category;
		priorityCell.textContent = priority;
		dueDateCell.textContent = dueDate;
		isDoneCell.textContent = isDone ? "完了" : "未完了";

		// 行にセルを追加
		row.appendChild(titleCell);
		row.appendChild(categoryCell);
		row.appendChild(priorityCell);
		row.appendChild(dueDateCell);
		row.appendChild(isDoneCell);

		// テーブルに行を追加
		tableBodyElem.appendChild(row);
	});
};
// 初期表示
displayTodo(todoData);

// リアルタイム検索
searchElem.addEventListener("input", (event) => {
	// 	入力内容を小文字で取得
	const searchText = searchElem.value.toLowerCase();

	let displayTodos = todoData.slice();//配列のコピー

	// フィルタリング
	if (searchText) {
		displayTodos = todoData.filter((todo) => {
			return todo.title.toLocaleLowerCase().includes(searchText);
		});
	}
	// console.log(displayTodos);
	displayTodo(displayTodos);
});