// タイマー処理
let counter = 10;
let timerId;

// カウンドダウンを行う関数
const countDown = () => {
  console.log(`残り： ${counter} 秒`);

  if (counter <= 0) {
    alert("⏰ 時間です！");
    clearInterval(timerId); // タイマーを停止
    return;
  }

  counter--;
};

// setTimeout
setTimeout(() => {
  // setInterval()
  timerId = setInterval(countDown, 1000);
}, 3000);
