// if文
const isConfirmed = confirm("お食事を始めますか？");

if (isConfirmed) {
  // trueの時の処理
  console.log("OKが押されました");

  const age = prompt("年齢を入力してください");

  // 比較演算子
  if (age >= 20) {
    console.log("成人です");
  }

  if (age == 20) {
    console.log("20歳ですね！！");
  }

  if (age === 20) {
    console.log("20歳ですね！！"); // prompt は文字列で取得されるため、=== で比較すると false になる
  }

  // 論理演算子
  if (age >= 20 && age < 60) {
    console.log("20歳以上60歳未満の方：5000円");
  }

  if (age && (age < 20 || age >= 60)) {
    console.log("20歳未満または、60歳以上の方：1000円");
  }

  if (!age) {
    console.log("年齢を入力しなかった方: 100,000円");
  }
} else {
  // falseの時の処理
  console.log("キャンセルされました");
}
