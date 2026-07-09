// オブジェクトの作成
const pokemon = {
  name: "ピカチュウ",
  type: "でんき",
  level: 25,
};

// プロパティを追加
pokemon.nickname = "ぴかお"; // ドット記法
pokemon["attack-power"] = 55; // ブラケット記法
console.log(pokemon); // { name: 'ピカチュウ', type: 'でんき', level: 25, nickname: 'ぴかお', 'attack-power': 55 }
