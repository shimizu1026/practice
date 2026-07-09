// インスタンスメソッド
const num = 123.456;

// toString: 数値を文字列に変換（引数が未指定の場合は10進数）
console.log(num.toString()); // "123.456"

// toFixed: 小数点以下の桁数を指定して文字列に変換
console.log(num.toFixed(2)); // "123.46"

// valueOf: 数値をそのまま返す
console.log(num.valueOf()); // 123.456

// 静的メソッド
const str = "123.456";

// Number.parseInt: 文字列を整数に変換（第二引数は進数）
console.log(Number.parseInt(str, 10)); // 123

// Number.parseFloat: 文字列を浮動小数点数に変換
console.log(Number.parseFloat(str)); //123.456

// Number.isNaN: 値がNaNかどうかをチェック
console.log(Number.isNaN(str)); // false

// Number.isFinite: 値が有限な数かどうかをチェック
console.log(Number.isFinite(str)); // false
