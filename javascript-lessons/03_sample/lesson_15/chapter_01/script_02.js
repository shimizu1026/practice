const searchElem = document.querySelector("[data-search]");
const pokemons = document.querySelectorAll("[data-pokemon-list] > li");

// inputイベント
searchElem.addEventListener("input", (event) => {
  const searchText = event.target.value.toLowerCase(); // 入力内容を小文字に変換

  // ポケモンリストをループして表示/非表示を切り替え
  pokemons.forEach((pokemon) => {
    const pokemonName = pokemon.textContent.toLowerCase(); // ポケモン名を小文字に変換

    if (pokemonName.includes(searchText)) {
      pokemon.style.display = ""; // 検索テキストが含まれている場合は表示
    } else {
      pokemon.style.display = "none"; // 含まれていない場合は非表示
    }
  });
});
