// 独自関数の作成
function sayGreed(name = "サトシ", isDay = true) {
  // 三項演算子： 条件 ? trueの時の値 : falseの時の値
  const greeting = isDay ? "こんにちは" : "こんばんは";
  console.log(`${greeting}${name}だよ`);
}

// 独自関数の実行
sayGreed(); // こんにちはサトシだよ
sayGreed("ピカチュウ"); // こんにちはピカチュウだよ
sayGreed(undefined, false); //こんばんはサトシだよ
