// 独自関数の作成
function sayGreed(name = "サトシ", isDay = true) {
  let greeting;
  if (isDay) {
    greeting = "こんにちは";
  } else {
    greeting = "こんばんは";
  }
  console.log(`${greeting}${name}だよ`);
}

// 独自関数の実行
sayGreed(); // こんにちはサトシだよ
sayGreed("ピカチュウ"); // こんにちはピカチュウだよ
sayGreed(undefined, false); //こんばんはサトシだよ
