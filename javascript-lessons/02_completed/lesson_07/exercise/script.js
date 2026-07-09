// ポケモンを捕まえる関数
function catchPokemon(pokemon) {
  // 引数がポケモンオブジェクトじゃなかったら null を返して終了
  if (!pokemon || !pokemon.name) {
    return null;
  }

  const { name } = pokemon;

  if (confirm(`野生の${name}が現れた！捕まえますか？`)) {
    pokemon.nickname = prompt(`${name}にニックネームをつけてください`, name);
    alert(`${name}を捕まえた！`);
    return pokemon; // 捕まえたら返す
  }

  return null; // 捕まえなかった場合
}

// ポケモンを表示する関数
function displayParty(party = []) {
  for (const pokemon of party) {
    const { name, nickname, type, level } = pokemon;
    console.log(`${name} | ${nickname || name} | ${type} | Lv ${level}`);
  }
}

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

// 手持ちのポケモンの管理用配列
const party = [];

// 野生のポケモンが現れたときの処理
const fieldPokemon = [pikachu, hitokage, zenigame];
for (const pokemon of fieldPokemon) {
  const caught = catchPokemon(pokemon);
  if (caught) party.push(caught);
}

// 手持ちのポケモンの情報を表示
displayParty(party);
