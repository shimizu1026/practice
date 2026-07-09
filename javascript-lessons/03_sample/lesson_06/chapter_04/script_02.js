// オブジェクトの作成
const pokemon = {
  name: "ピカチュウ",
  nickname: "ぴかお",
  type: "でんき",
  level: 25,
};

// for...in文
for (const key in pokemon) {
  if (pokemon.hasOwnProperty(key)) {
    // 自身のプロパティのみを表示
    console.log(`${key}: ${pokemon[key]}`);
  }
}
