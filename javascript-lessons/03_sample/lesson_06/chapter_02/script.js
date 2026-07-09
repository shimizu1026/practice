// オブジェクトの作成
const pokemon = {
  name: "ピカチュウ",
  nickname: "ぴかお",
  type: "でんき",
  level: 25,
};

// プロパティの削除
delete pokemon.nickname;
console.log(pokemon); // { name: 'ピカチュウ', type: 'でんき', level: 25 }
