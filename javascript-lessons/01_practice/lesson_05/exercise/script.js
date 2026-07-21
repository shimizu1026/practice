// 「ヒトカゲ」、「フシギダネ」、「ゼニガメ」を要素とした配列を変数partyに代入
const party = ["ヒトカゲ", "フシギダネ", "ゼニガメ"];
console.log(party);
const pikachu = "ピカチュウ";

// 確認ダイアログで「野生のピカチュウが現れた！捕まえますか？」と表示
const question = confirm(`野生のピカチュウが現れた！捕まえますか？`);

console.log(question);

	// 上記ダイアログの結果がOKの場合
	if (question) {
		// 変数party の末尾に「ピカチュウ」を追加
		party.push("ピカチュウ");

		// 警告ダイアログで「ピカチュウを捕まえた！」と表示
		alert(`ピカチュウを捕まえた！`);
	}

// 入力ダイアログ「野生のミューツーが現れた！戦うポケモンを選んでください」の結果を変数 chosenName に代入
const chosenName = prompt(`野生のミューツーが現れた！戦うポケモンを選んでください`);

// 変数（配列） party 内に、変数chosenNameと一致するポケモンがあれば、警告ダイアログに「いけ！{変数chosenName}！」と表示
// alert(`いけ！${chosenName}！`);
let selected = null;

for (const pokemon of party) {
	if (pokemon === chosenName) {
		selected = pokemon;
		break;
	}
}
	if (selected) {
		alert(`いけ！${selected}！`);
	} else {
	alert(`${chosenName}を持っていません。サトシは逃げた！`);
}

// 余裕があれば、変数 party 内に、変数chosenName のポケモンがいなければ、警告ダイアログに「{変数chosenName}を持っていません。サトシは逃げた！」と表示してください
