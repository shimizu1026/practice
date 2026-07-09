// カウンターの初期値
let counter = 1;

// カウンターを表示する関数
function displayCount() {
  console.log(`${counter} 回実行されました。`);
}

// アニメーションフレームを開始
requestAnimationFrame(displayCount);
