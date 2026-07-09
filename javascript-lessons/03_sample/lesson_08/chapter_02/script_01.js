// カウンターの初期値
let counter = 1;

// 経過秒を表示する関数
function displayTime() {
  console.log(`${counter} 秒経過しました。`);
}

// タイマー開始
setTimeout(displayTime, 1000);
