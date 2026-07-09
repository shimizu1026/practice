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
} else {
  // falseの時の処理
  console.log("キャンセルされました");
}
