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
const searchElem = document.querySelector("[data-search]");
const typeSelectElem = document.querySelector("[data-type-select]");
const sortSelectElem = document.querySelector("[data-sort-select]");
const formElem = document.querySelector("[data-add-form]");

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

displayPokemon(pokemonData);

const updatePokemon = () => {
	const searchPokemon = searchElem.value.toLowerCase();
	let copyList = pokemonData.slice();
	const selectedType = typeSelectElem.value;
	const sortOrder = sortSelectElem.value;

	//  「ポケモンを検索」入力フィールドを活用してリアルタイムでポケモン名で絞り込めるようにする
	if (searchPokemon) {
		copyList = copyList.filter((pokemon) => {
			return pokemon.name.toLocaleLowerCase().includes(searchPokemon);
		});
	}

	//  「タイプ」のセレクトボックスでタイプごとのポケモンを絞り込めるようにする
	// 選ばれている値を取る 
	if (selectedType !== "すべて") {
		copyList = copyList.filter((pokemon) => {
			return pokemon.type === selectedType;
		});
	}

	//  「ソート」のセレクトボックスでレアリティ順に並び替えできるようにする

	copyList.sort((a, b) => {
		if (sortOrder === "id-asc") {
			return a.id - b.id;
		}
		if (sortOrder === "id-desc") {
			return b.id - a.id;
		}
		if (sortOrder === "rarity-asc") {
			return a.rarity.length - b.rarity.length;
		}
		if (sortOrder === "rarity-desc") {
			return b.rarity.length - a.rarity.length;
		}
	});
	displayPokemon(copyList);
}

searchElem.addEventListener("input", updatePokemon);
typeSelectElem.addEventListener("change", updatePokemon);
sortSelectElem.addEventListener("change", updatePokemon);

updatePokemon();

//  ポケモンを追加できるようにする
addFormElem.addEventListener("submit", (event) => {
	event.preventDefault;

	const formData = formElem.value.toLocaleLowerCase();

	const newPokemon = {
		id: formData.get("id"),
		id: formData.get("name"),
		id: formData.get("type"),
		id: formData.get("rarity")
	}

	pokemonData.push(newPokemon);

	updatePokemon();

	addFormElem.requestFullscreen();
});

