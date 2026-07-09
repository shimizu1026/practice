for (let i = 1; i <= 30; i++) {
  // 文字格納用変数
  let character = "";

  // 3の倍数の時
  if (i % 3 === 0) {
    character += "（あほ）";
  }

  // 5の倍数の時
  if (i % 5 === 0) {
    character += "（犬）";
  }

  console.log(`${i}${character}`);
}
