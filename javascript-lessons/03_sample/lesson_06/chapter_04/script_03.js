// オブジェクトの作成
const pokemon = {
  name: "ピカチュウ",
  nickname: "ぴかお",
  type: "でんき",
  level: 25,
};

// キーの配列を作成
const keys = Object.keys(pokemon);
console.log(keys); // ['name', 'nickname', 'type', 'level']
