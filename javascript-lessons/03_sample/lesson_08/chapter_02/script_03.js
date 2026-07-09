// カウンターの初期値
let counter = 0;

// 経過秒を表示する関数
function displayTime() {
  console.log(`${counter} 秒経過しました。`);
  counter++;
  // タイマー開始
  const timerId = setTimeout(displayTime, 1000);

  // もしカウンターが10より大きければ、タイマーを停止
  if (counter > 10) {
    clearTimeout(timerId);
    console.log("タイマーを停止しました。");
    return;
  }
}

// 最初の呼び出し
displayTime();
