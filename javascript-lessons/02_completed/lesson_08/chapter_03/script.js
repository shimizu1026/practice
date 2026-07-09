// タイマー処理
let counter = 10;
let position = 0;
let timerId;
let rafId;

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

// アニメーションを実行する関数
const run = () => {
  console.log(`現在の位置: ${position}`);

  if (counter <= 0) {
    alert("終了！");
    cancelAnimationFrame(rafId);
    return;
  }

  position += 10;

  rafId = requestAnimationFrame(run);
};

// setTimeout
setTimeout(() => {
  // setInterval()
  timerId = setInterval(countDown, 1000);
  // requestAnimationFrame()
  rafId = requestAnimationFrame(run);
}, 3000);
