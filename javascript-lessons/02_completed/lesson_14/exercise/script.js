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

// 要素の取得
const addButton = document.querySelector('[data-button="add"]');
const listElem = document.querySelector("[data-list]");

// ランダムなポケモンを取得する関数
const getRandomPokemon = () => {
  const randomIndex = Math.floor(Math.random() * pokemonData.length);
  return pokemonData[randomIndex];
};

// ポケモンカードを生成する関数
const createPokemonCard = (pokemon) => {
  // 要素の作成
  const card = document.createElement("li");
  const id = document.createElement("span");
  const name = document.createElement("span");
  const type = document.createElement("span");
  const rarity = document.createElement("span");
  const deleteButton = document.createElement("button");

  // 属性の設定
  card.classList.add("pokemon");
  id.classList.add("pokemon-id");
  name.classList.add("pokemon-name");
  type.classList.add("pokemon-type");
  rarity.classList.add("pokemon-rarity");
  deleteButton.classList.add("button", "button-delete");
  deleteButton.setAttribute("type", "button");

  // 内容の設定
  id.textContent = pokemon.id;
  name.textContent = pokemon.name;
  type.textContent = pokemon.type;
  rarity.textContent = pokemon.rarity;
  deleteButton.textContent = "逃がす";

  // イベントリスナーの設定
  deleteButton.addEventListener("click", () => {
    card.remove();
  });

  // 要素を追加
  card.appendChild(id);
  card.appendChild(name);
  card.appendChild(type);
  card.appendChild(rarity);
  card.appendChild(deleteButton);

  return card;
};

// ゲットボタン
addButton.addEventListener("click", () => {
  const randomPokemon = getRandomPokemon();
  const pokemonCard = createPokemonCard(randomPokemon);
  listElem.appendChild(pokemonCard);
});
