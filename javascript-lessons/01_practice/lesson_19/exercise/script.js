// デフォルトのポケモンデータ
const defaultPokemonData = [
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

// 要素の取得
const tableBodyElem = document.querySelector("[data-table-body]");
const searchElem = document.querySelector("[data-search]");
const typeSelectElem = document.querySelector("[data-type-select]");
const sortSelectElem = document.querySelector("[data-sort-select]");
const addFormElem = document.querySelector("[data-add-form]");

// === localStorage ポケモンデータの永続化 ===
const savePokemonData = (data) => {
	try {
		localStorage.setItem("PokemonData", JSON.stringify(data));
		return true;
	} catch (error) {
		console.error("保存に失敗", error);
		return false;
	}
};

const loadPokemonData = () => {
	try {
		const savedData = localStorage.getItem("PokemonData");

		if (savedData) {
			return JSON.parse(savedData);
		}
		return defaultPokemonData;
	} catch (error) {
		console.error("データの読み込みに失敗しました", error);
	}

	pokemonData.push(newPokemon);
}



// === sessionStorage 検索・フィルタ状態の保存 ===

// === ポケモン図鑑の機能 ===

// ポケモンをテーブルに追加する関数
const displayPokemon = (pokemons) => {
	// 既存の行をクリア
	tableBodyElem.innerHTML = "";

	// ポケモンデータをループして行を作成
	pokemons.forEach((pokemon) => {
		// 要素の作成
		const row = document.createElement("tr");
		const idCell = document.createElement("td");
		const nameCell = document.createElement("td");
		const typeCell = document.createElement("td");
		const rarityCell = document.createElement("td");

		// 内容の設定
		const { id, name, type, rarity } = pokemon;
		idCell.textContent = id;
		nameCell.textContent = name;
		typeCell.textContent = type;
		rarityCell.textContent = rarity;

		// 行にセルを追加
		row.appendChild(idCell);
		row.appendChild(nameCell);
		row.appendChild(typeCell);
		row.appendChild(rarityCell);

		// テーブルに行を追加
		tableBodyElem.appendChild(row);
	});
};

const updatePokemon = () => {
	const searchText = searchElem.value.toLowerCase(); // 入力値を小文字に変換
	const selectedType = typeSelectElem.value; // 選択されたタイプの取得
	const sortOrder = sortSelectElem.value; // ソート順の取得

	let displayPokemons = pokemonData.slice();

	// 検索フィルタリング
	if (searchText) {
		displayPokemons = pokemonData.filter((pokemon) => {
			return pokemon.name.toLowerCase().includes(searchText);
		});
	}

	// タイプフィルタリング
	if (selectedType && selectedType !== "すべて") {
		displayPokemons = displayPokemons.filter((pokemon) => {
			return pokemon.type === selectedType;
		});
	}

	// ソート
	displayPokemons.sort((a, b) => {
		if (sortOrder === "id-asc") {
			return a.id - b.id; // IDの昇順
		}

		if (sortOrder === "id-desc") {
			return b.id - a.id; // IDの降順
		}

		if (sortOrder === "rarity-asc") {
			return a.rarity.length - b.rarity.length; // レアリティが低い順
		}

		if (sortOrder === "rarity-desc") {
			return b.rarity.length - a.rarity.length; // レアリティが高い順
		}
	});

	// フィルタリング結果を表示
	displayPokemon(displayPokemons);
};

// === イベントリスナー ===

// リアルタイム検索
searchElem.addEventListener("input", updatePokemon);

// タイプ選択の変更イベント
typeSelectElem.addEventListener("change", updatePokemon);

// ソート順の変更イベント
sortSelectElem.addEventListener("change", updatePokemon);

// ポケモンの追加
addFormElem.addEventListener("submit", (event) => {
	event.preventDefault(); // フォームのデフォルト送信を防止

	try {
		const formData = new FormData(event.target); // フォームデータの取得
		const newPokemon = {
			id: formData.get("id"),
			name: formData.get("name"),
			type: formData.get("type"),
			rarity: formData.get("rarity"),
		};

		pokemonData.push(newPokemon); // 新しいポケモンを追加

		updatePokemon(); // ポケモンリストを更新

		addFormElem.reset(); // フォームをリセット
	} catch (error) {
		console.error("ポケモンの追加に失敗:", error);
		alert("ポケモンの追加に失敗しました");
	}
});


let pokemonData = loadPokemonData();


// === 初期化処理 ===

// 初期表示
updatePokemon();
