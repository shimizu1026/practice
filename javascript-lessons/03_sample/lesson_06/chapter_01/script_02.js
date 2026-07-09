// オブジェクトの作成
const pokemon = {
  name: "ピカチュウ",
  type: "でんき",
  level: 25,
  "attack-power": 55,
};

// プロパティにアクセス
pokemon.level = 26; // ピカチュウのレベルを変更
pokemon.level++; // ピカチュウのレベルを1上げる
console.log(pokemon.level); // ピカチュウ（ドット記法）
