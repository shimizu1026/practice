
// ポケモンデータ
const pokemonData = [
	{ id: 1, name: "ピカチュウ", type: "でんき", rarity: "☆" },
	{ id: 2, name: "フシギダネ", type: "くさ", rarity: "☆" },
	{ id: 3, name: "ヒトカゲ", type: "ほのお", rarity: "☆" },
	{ id: 4, name: "ゼニガメ", type: "みず", rarity: "☆" },
	{ id: 5, name: "リザードン", type: "ほのお", rarity: "★★" },
	{ id: 6, name: "フシギバナ", type: "くさ", rarity: "★★" },
	{ id: 7, name: "カメックス", type: "みず", rarity: "★★" },
	{ id: 8, name: "ミュウツー", type: "エスパー", rarity: "✦✦✦" },
	{ id: 9, name: "ミュウ", type: "エスパー", rarity: "✦✦✦" },
];
//  「ポケモンGetだぜ！」ボタンと、画面表示用の ul 要素を取得
const addButton = document.querySelector('[data-button="add"]');
const pokemonList = document.querySelector("[data-list]");

//  4で取得したボタンのクリックイベントを監視し、イベントが発生したら 6 ~ 10 の処理が行われるようにする
addButton.addEventListener("click", () => {
	//  配列pokemonData からランダムでポケモンオブジェクトをひとつ抽出
	const randomData = Math.floor(Math.random() * pokemonData.length);
	const randomPokemon = pokemonData[randomData];
	// console.log(randomPokemon);

	//  抽出したポケモンオブジェクトを画面に追加するための要素を作成（li 要素）
	const getPokemon = document.createElement("li");

	//  ID、名前、タイプ、レアリティの各項目を span 要素で作成し、7 の li 要素に追加
	// const idSpan = document.createElement("span");
	// idSpan.textContent = randomPokemon.id;
	// getPokemon.appendChild(idSpan);

	// const nameSpan = document.createElement("span");
	// nameSpan.textContent = randomPokemon.name;
	// getPokemon.appendChild(nameSpan);

	// const typeSpan = document.createElement("span");
	// typeSpan.textContent = randomPokemon.type;
	// getPokemon.appendChild(typeSpan);

	// const raritySpan = document.createElement("span");
	// raritySpan.textContent = randomPokemon.rarity;
	// getPokemon.appendChild(raritySpan);

	const addSpan = (text) => {
		const span = document.createElement("span");
		span.textContent = text;
		getPokemon.appendChild(span);
	}

	addSpan(randomPokemon.id);
	addSpan(randomPokemon.name);
	addSpan(randomPokemon.type);
	addSpan(randomPokemon.rarity);

	//  ポケモン削除用の button 要素を作成し、イベントリスナーなどの設定を行い、7 の li 要素に追加
	const deleteButton = document.createElement("button");

	deleteButton.textContent = "逃がす";
	deleteButton.setAttribute("type", "button");

	deleteButton.addEventListener("click", () => {
		getPokemon.remove();
	})

	//  7 の li 要素を、画面表示用の ul 要素に追加
	getPokemon.appendChild(deleteButton);
	pokemonList.appendChild(getPokemon);
})
// タイプ、レアリティでフィルタリングなど。いったん捕まえたポケモンの配列をつくる。配列上でフィルターボタンが押されたらタイプごとにフィルタリングして画面に出す。


