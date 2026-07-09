// カウンターの初期値
let counter = 1;
let rafID;

// カウンターを表示する関数
function displayCount() {
  console.log(`${counter} 回実行されました。`);
  counter++;

  // もしカウンターが10を超えたら停止
  if (counter > 10) {
    cancelAnimationFrame(rafID);
    console.log("アニメーションフレームを停止しました。");
    return;
  }

  rafID = requestAnimationFrame(displayCount);
}

// アニメーションフレームを開始
rafID = requestAnimationFrame(displayCount);
