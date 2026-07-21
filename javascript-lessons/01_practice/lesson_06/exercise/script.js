// 以下の3つのオブジェクト作成
const pikachu = {
	name: "ピカチュウ",
	type: "でんき",
	level: 1,
}
const hitokage = {
	name: "ヒトカゲ",
	type: "ほのお",
	level: 5,
}
const zenigame = {
	name: "ゼニガメ",
	type: "みず",
	level: 1,
}
// 変数party を空の配列として作成
const party = [];

// 以下の処理を、作成したポケモンのオブジェクトの数だけ行う（「⚪︎⚪︎」は、ポケモンオブジェクトの nameプロパティの値に置き換える）
const fieldPokemon = [pikachu, hitokage, zenigame];

for (const pokemon of fieldPokemon) {
	const { name } = pokemon;
	// 確認ダイアログで「野生の⚪︎⚪︎が現れた！捕まえますか？」と表示
	if (confirm(`野生の${name}が現れた！捕まえますか`)) {
		// 上記ダイアログの結果がOKの場合
		// 入力ダイアログ「⚪︎⚪︎にニックネームをつけてください」（初期値を「⚪︎⚪︎」にしておく）の結果を対応するポケモンオブジェクトの nickname プロパティとして追加
		pokemon.nickname = prompt(`${name}にニックネームをつけてください`, name);
		// 変数（配列）party の末尾に対応するポケモンオブジェクトを追加
		party.push(pokemon);
		// 警告ダイアログで「⚪︎⚪︎を捕まえた！」と表示
		alert(`${name}を捕まえた！`);
	}
}


// 変数（配列） party をループして、捕まえたポケモンオブジェクトの各プロパティをコンソールに出力（表示形式: name | nickname | type | level）
for (const pokemon of party) {
	// 余裕があれば
	// nickname プロパティは、入力ダイアログで「キャンセル」が選択されると null になります。捕まえたポケモンの一覧を表示する際に、 nickname が null の場合は、name プロパティの値を代わりに表示するか、「なし」と表示するようにしてみてください。論理演算子を活用すると楽に対応できます。
	const { name, nickname, type, level } = pokemon;
	console.log(`${name} | ${nickname || name} | ${type} | ${level}`);
}

