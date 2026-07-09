// 独自関数の作成（関数宣言）
function getTriangleArea(base, height) {
  return (base * height) / 2;
}

// 独自関数の作成（関数式）
// const checkTriangleSize = function (area) {
//   return area >= 50 ? "大きい三角形" : "小さい三角形";
// };

// 独自関数の作成（アロー関数）
const checkTriangleSize = (area) => (area >= 50 ? "大きい三角形" : "小さい三角形");

// 独自関数の実行
const area1 = getTriangleArea(10, 5); // 25
const area2 = getTriangleArea(20, 10); // 100

console.log(area1); // 25
console.log(area2); // 100

// 三角形の面積を比較する関数の実行
console.log(checkTriangleSize(area1)); // 小さい三角形
console.log(checkTriangleSize(area2)); // 大きい三角形
