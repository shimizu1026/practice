// カウンターの初期値
let counter = 1;

// タイマー開始
const timer = setInterval(() => {
  console.log(`${counter} 秒経過しました。`);
  counter++;
}, 1000);
