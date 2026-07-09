const num1 = 123.456;
const num2 = -10;
const num3 = 50;

// Math.round: 四捨五入
console.log(Math.round(num1)); // 123

// Math.floor: 小数点以下を切り捨て
console.log(Math.floor(num1)); // 123

// Math.ceil: 小数点以下を切り上げ
console.log(Math.ceil(num1)); // 124

// Math.abs: 絶対値を取得
console.log(Math.abs(num2)); // 10

// Math.random: 0以上1未満のランダムな数を生成
console.log(Math.random()); // 0〜1未満のランダムな数

// Math.max: 引数の中で最大値を取得
console.log(Math.max(num1, num2, num3)); // 123.456

// Math.min: 引数の中で最小値を取得
console.log(Math.min(num1, num2, num3)); // -10

// Math.pow: 指定した数のべき乗を計算
console.log(Math.pow(2, 3)); // 8

// Math.sqrt: 平方根（ルート）を計算
console.log(Math.sqrt(9)); // 3

// Math.PI: 円周率を取得
console.log(Math.PI); // 3.141592653589793
