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
// 配列pokemonData を活用してテーブルにポケモンの一覧が表示されるようにする

// 要素の取得
const dataElem = document.querySelector("[data-table-body]");

// pokemonをテーブルに追加する関数
const displayPokemon = (pokemons) => {
	dataElem.innerHTML = "";

	pokemons.forEach((pokemon) => {
		const row = document.createElement("tr");
		const idCell = document.createElement("td");
		const nameCell = document.createElement("td");
		const typeCell = document.createElement("td");
		const rarityCell = document.createElement("td");

		const { id, name, type, rarity } = pokemon;

		idCell.textContent = id;
		nameCell.textContent = name;
		typeCell.textContent = type;
		rarityCell.textContent = rarity;

		row.appendChild(idCell);
		row.appendChild(nameCell);
		row.appendChild(typeCell);
		row.appendChild(rarityCell);

		dataElem.appendChild(row);
	});
};

//  「ポケモンを検索」入力フィールドを活用してリアルタイムでポケモン名で絞り込めるようにする
const searchElem = document.querySelector("[data-search]");

searchElem.addEventListener("input", () => {
	const searchPokemon = searchElem.value.toLowerCase();

	let displayPokemons = pokemonData.slice();

	//  「タイプ」のセレクトボックスでタイプごとのポケモンを絞り込めるようにする
	if (searchPokemon) {
		displayPokemons = 
	}

	//  「ソート」のセレクトボックスでレアリティ順に並び替えできるようにする

})

displayPokemon(pokemonData);


//  ポケモンを追加できるようにする
