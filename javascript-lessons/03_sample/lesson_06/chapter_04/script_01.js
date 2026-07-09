// オブジェクトの作成
const pokemon = {
  name: "ピカチュウ",
  nickname: "ぴかお",
  type: "でんき",
  level: 25,
};

// for...in文
for (const key in pokemon) {
  console.log(`${key}: ${pokemon[key]}`);
}
