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
