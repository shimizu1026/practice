// 独自関数の作成
function sayGreed(name, isDay) {
  let greeting;
  if (isDay) {
    greeting = "こんにちは";
  } else {
    greeting = "こんばんは";
  }
  console.log(`${greeting}${name}だよ`);
}

// 独自関数の実行
sayGreed("ピカチュウ", true); // こんにちはピカチュウだよ
sayGreed("ヒトカゲ", false); // こんばんはヒトカゲだよ
