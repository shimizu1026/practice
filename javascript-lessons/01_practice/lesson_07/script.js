// 独自関数（関数宣言）
function getTriangleArea(base, height) {
	// const result = (base * height) / 2;
	// console.log(result);
	// return result;
	return (base * height) / 2;
}

// 独自関数（関数式）
// const checkTriangleSize = function (area) {

// return area >= 50 ? "大きい三角形ですね！" : "小さい三角形ですね！"
// if (area >= 50) {
// 	console.log("大きい三角形ですね");
// } else {
// 	console.log("小さい三角形ですね");
// }
// }

// 関数式（アロー関数）

const checkTriangleSize = (area) => area >= 50 ? "大きい三角形ですね！" : "小さい三角形ですね！";

// 独自関数の実行
const area1 = getTriangleArea(10, 5);
const area2 = getTriangleArea(20, 10);

console.log(area1);
console.log(area2);

// 三角形の面積のサイズをチェック
console.log(checkTriangleSize(area1));
console.log(checkTriangleSize(area2));

// if (area1 >= 50) {
// 	console.log("大きい三角形ですね");
// } else {
// 	console.log("小さい三角形ですね");
// }
// if (area2 >= 50) {
// 	console.log("大きい三角形ですね");
// } else {
// 	console.log("小さい三角形ですね");
// }

