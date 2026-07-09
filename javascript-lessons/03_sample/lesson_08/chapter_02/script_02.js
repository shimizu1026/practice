// カウンターの初期値
let counter = 0;

// 経過秒を表示する関数
function displayTime() {
  console.log(`${counter} 秒経過しました。`);
  counter++;
  // タイマー開始
  setTimeout(displayTime, 1000);
}

// 最初の呼び出し
displayTime();
