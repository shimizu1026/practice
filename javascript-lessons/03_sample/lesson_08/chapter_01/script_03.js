// カウンターの初期値
let counter = 1;

// タイマー開始
const timerId = setInterval(() => {
  console.log(`${counter} 秒経過しました。`);

  // 10秒経過したらタイマーを停止
  if (counter >= 10) {
    clearInterval(timerId);
    console.log("タイマーを停止しました。");
    return;
  }

  counter++;
}, 1000);
