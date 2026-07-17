// 配列の作成
const todos = ["メールを確認する", "買い物に行く", "掃除をする"];

console.log(todos);

// 要素のアクセス
todos[1] = "おいしいご飯を食べる";
console.log(todos[1]);

// 要素の追加
todos.push("お風呂に入る");//末尾に追加
todos.shift();//先頭の削除

// 配列の長さ
console.log(todos.length);

todos.push("歯を磨く");
// 配列のループ
// for (let i = 0; i < todos.length; i++) {
// 	console.log(todos[i]);
// }
// for...of
for (const todo of todos) {
	console.log(todo);
}