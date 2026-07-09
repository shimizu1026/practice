// while文
const count = prompt("何回繰り返しますか？");
const searchNumber = prompt("何番を探しますか？");
const avoidNumber = prompt("何番をスキップしますか？");

let i = 1; // ループ用変数の初期値

while (i <= count) {
  // i が　count以下の間繰り返す

  if (i == searchNumber) {
    console.log(`${searchNumber}番を見つけました`);
    break; // ループを抜ける
  }

  console.log(`whileで${i}回目のループ`);
  i++; // ループ用変数の加算（インクリメント）
}

// for文
for (let i = 1; i <= count; i++) {
  // i が　count以下の間繰り返す

  if (i == avoidNumber) {
    console.log(`${avoidNumber}番はスキップします`);
    continue; // ループの先頭に戻る
  }

  console.log(`forで${i}回目のループ`);
}
