// 演算
console.log(5 + 10);
console.log(10 - 5);
console.log(8 * 6);
console.log(12 / 4);
console.log(6 % 3);
console.log(5 ** 5);

// 変数
const message = "こんにちは";
const year = 2025;
const userName = prompt("お名前を入力してね");
let age = 20;
const since = year - age;

console.log(message)
console.log(year);
console.log(userName);
console.log(age);
console.log(since);

age = 24;
console.log(age);
console.log(since);
console.log(year - age);

// テンプレートリテラル

console.log(`${message}、${year - age}年生まれの${userName}です。`);
