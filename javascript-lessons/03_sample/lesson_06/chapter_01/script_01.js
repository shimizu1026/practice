// オブジェクトの作成
const pokemon = {
  name: "ピカチュウ",
  type: "でんき",
  level: 25,
  "attack-power": 55,
};

// プロパティにアクセス
console.log(pokemon.name); // ピカチュウ（ドット記法）
console.log(pokemon["attack-power"]); // 55（ブラケット記法）
