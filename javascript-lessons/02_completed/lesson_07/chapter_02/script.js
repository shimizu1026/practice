// 独自関数の作成（関数宣言）
function getTriangleArea(base, height) {
  return (base * height) / 2;
}

// 独自関数の実行
const area1 = getTriangleArea(10, 5); // 25
const area2 = getTriangleArea(20, 10); // 100

console.log(area1); // 25
console.log(area2); // 100

if (area1 >= 50) {
  console.log("大きい三角形");
} else {
  console.log("小さい三角形");
}
if (area2 >= 50) {
  console.log("大きい三角形");
} else {
  console.log("小さい三角形");
}
