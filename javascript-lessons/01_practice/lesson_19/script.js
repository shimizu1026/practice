// Todoデータ
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
const sortSelectElem = document.querySelector("[data-sort-select]");
const addFormElem = document.querySelector("[data-add-form]");

// 検索・フィルタ状態を保存する関数
const saveFilterState = () => {
  try {
    const filterState = {
      search: searchElem.value,
      sort: sortSelectElem.value,
    };

    // セッションストレージに保存(JSONに変換して)
    sessionStorage.setItem("todoFilterState", JSON.stringify(filterState));
  } catch (error) {
    console.error("フィルタ状態の保存に失敗", error);
  }
};

// 検索・フィルタ状態を復元する関数
const loadFilterState = () => {
  try {
    // セッションストレージから読み込み
    const savedState = sessionStorage.getItem("todoFilterState");

    if (savedState) {
      // JSONをオブジェクトに変換
      const filterState = JSON.parse(savedState);

      // コントロール部品委復元
      searchElem.value = filterState.search || "";
      sortSelectElem.value = filterState.sort || "asc";
    }
  } catch (error) {
    console.error("フィルタ状態の復元に失敗：", error);
  }
};

// Todoをテーブルに追加する関数
const displayTodo = (todos) => {
  // 既存の行をクリア
  tableBodyElem.innerHTML = "";

  // Todoデータをループして行を作成
  todos.forEach((todo) => {
    // 要素の作成
    const row = document.createElement("tr");
    const titleCell = document.createElement("td");
    const categoryCell = document.createElement("td");
    const priorityCell = document.createElement("td");
    const dueDateCell = document.createElement("td");
    const isDoneCell = document.createElement("td");

    // 内容の設定
    const { title, category, priority, dueDate, isDone } = todo;
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

// Todoリストを更新する関数
const updateTodo = () => {
  const searchText = searchElem.value.toLowerCase(); // 入力値を小文字に変換
  const sortOrder = sortSelectElem.value; // ソート順の取得

  let displayTodos = todoData.slice();

  // フィルタリング
  if (searchText) {
    displayTodos = todoData.filter((todo) => {
      return todo.title.toLowerCase().includes(searchText);
    });
  }

  // ソート
  displayTodos.sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);

    if (sortOrder === "asc") {
      return dateA - dateB; // 期日が近い順
    } else {
      return dateB - dateA; // 期日が遠い順
    }
  });

  // フィルタ条件の保存
  saveFilterState();

  // フィルタリング結果を表示
  displayTodo(displayTodos);
};

// リアルタイム検索
searchElem.addEventListener("input", updateTodo);

// ソート順の変更イベント
sortSelectElem.addEventListener("change", updateTodo);

// Todoの追加
addFormElem.addEventListener("submit", (event) => {
  event.preventDefault(); // フォームのデフォルト送信を防止

  const formData = new FormData(event.target); // フォームデータの取得
  const newTodo = {
    title: formData.get("title"),
    category: formData.get("category"),
    priority: formData.get("priority"),
    dueDate: formData.get("dueDate"),
    isDone: false, // 新規追加は未完了
  };

  todoData.push(newTodo); // 新しいTodoを追加
  updateTodo(); // Todoリストを更新

  addFormElem.reset(); // フォームをリセット
});

// ページ読み込み時
window.addEventListener("load", () => {
  // フィルタ状態の復元
  loadFilterState();
  // 初期表示
  updateTodo();
});
