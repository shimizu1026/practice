// オブジェクトの作成
const pokemon = {
  name: "ピカチュウ",
  nickname: "ぴかお",
  type: "でんき",
  level: 25,
};

// 分割代入
const { name: pokemonName, nickname, type } = pokemon;
console.log(pokemonName); // ピカチュウ
console.log(nickname); // ぴかお
