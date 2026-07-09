// if文

const isConfirmed = confirm("お食事を始めますか？");

if (isConfirmed) {
  // trueの時の処理
  console.log("OKが押されました");
} else {
  // falseの時の処理
  console.log("キャンセルされました");
}
