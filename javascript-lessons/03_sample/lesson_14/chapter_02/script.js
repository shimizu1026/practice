const listElem = document.querySelector("[data-list]");

// li要素を生成する関数
const createPokemonItem = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
};

// appendChild() : 末尾に追加
const pokemon1 = createPokemonItem("ピカチュウ");
listElem.appendChild(pokemon1);

// insertBefore() : 指定した要素の手前に追加
const pokemon2 = createPokemonItem("ヒトカゲ");
listElem.insertBefore(pokemon2, pokemon1);

// prepend() : 先頭に追加
const pokemon3 = createPokemonItem("ゼニガメ");
listElem.prepend(pokemon3);

// append() : 末尾に追加
const pokemon4 = createPokemonItem("フシギダネ");
const pokemon5 = createPokemonItem("イーブイ");
listElem.append(pokemon4, pokemon5);
