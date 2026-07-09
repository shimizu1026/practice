// オブジェクトの作成
const pokemon = {
  name: "ピカチュウ",
  nickname: "ぴかお",
  type: "でんき",
  level: 25,
};

// キーと値のペアを取得
const entries = Object.entries(pokemon);
console.log(entries); // [['name', 'ピカチュウ'], ['nickname', 'ぴかお'], ['type', 'でんき'], ['level', 25]]

// Object.entries() + for...of
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
