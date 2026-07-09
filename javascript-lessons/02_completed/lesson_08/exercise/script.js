// カウンターの初期値
var counter = 1;

// タイマー開始
var timer = setInterval(() => {
  // 文字格納用変数
  let character = "";

  // 3の倍数の時
  if (counter % 3 === 0) {
    character += "（あほ）";
  }

  // 5の倍数の時
  if (counter % 5 === 0) {
    character += "（犬）";
  }

  // カウンターが 30 以下確認
  if (counter <= 30) {
    // 30 以下なら画面に出力
    console.log(`${counter}${character}`);
  } else {
    // 30より大きければストップ
    clearInterval(timer);
    alert("オモロー");
    return;
  }

  counter++;
}, 1000);
