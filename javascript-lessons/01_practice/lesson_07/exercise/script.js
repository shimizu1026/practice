// 「Chapter6」の練習問題で作成したコードの中で「関数に分けたほうがよい部分」を見つけて（絶対的な正解はない）、関数として定義し、使うように書き換えてる。（どの関数の宣言を使ってもよいこととする）

// ポケモンオブジェクトの生成
const pikachu = {
	name: "ピカチュウ",
	type: "でんき",
	level: 1,
};

const hitokage = {
	name: "ヒトカゲ",
	type: "ほのお",
	level: 5,
};

const zenigame = {
	name: "ゼニガメ",
	type: "みず",
	level: 5,
};

const catchPokemon = (pokemon) => {
	const { name } = pokemon;
	// ここに confirm / prompt / alert
	confirm(`野生の${name}が現れた！捕まえますか？`);
	// 捕まえたら pokemon を return



	alert(`${name}を捕まえた！`);
	// 捕まえなかったら null を return
};

// 手持ちのポケモンの管理用配列
const party = [];

// 野生のポケモンが現れたときの処理
// ループを活用すれば以下のように書けます。
const fieldPokemon = [pikachu, hitokage, zenigame];
for (const pokemon of fieldPokemon) {
	const { name } = pokemon;
	if (confirm(`野生の${name}が現れた！捕まえますか？`)) {
		// ニックネームをプロパティに追加
		pokemon.nickname = prompt(`${name}にニックネームをつけてください`, name);

		// ポケモンを手持ちに加える
		party.push(pokemon);

		alert(`${name}を捕まえた！`);
	}
}

// 手持ちのポケモンの情報を表示
for (const pokemon of party) {
	const { name, nickname, type, level } = pokemon;

	console.log(`${name} | ${nickname || name} | ${type} | Lv ${level}`);
}
