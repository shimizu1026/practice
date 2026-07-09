// オブジェクトの作成
const pokemon = {
  name: "ピカチュウ",
  nickname: "ぴかお",
  type: "でんき",
  level: 25,
};

// 分割代入
const { name, nickname, type } = pokemon;
console.log(name); // ピカチュウ
console.log(nickname); // ぴかお
