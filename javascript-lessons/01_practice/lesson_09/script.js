const inputName = prompt("フルネームをローマ字で入力してください") || "";

const inputAge = prompt("年齢を入力") || "";
// falsyだったら空文字を返す

// if (!inputName) {
// 	inputName = "";
// }
// String オブジェクト
// const renamed = inputName.replaceAll("　", " ");
// const userName = inputName.trim();

const userName = inputName.replaceAll("　", " ").trim();
console.log(userName);

const upperCaseName = userName.toUpperCase();

// console.log(renamed);
console.log(upperCaseName);

if (upperCaseName.includes("Y")) {
	console.log("あなたの名前に「Y」が含まれていますね。");
} else {
	console.log("あなたの名前に「Y」がありませんね。");
}

const parts = userName.split(" ");
console.log(parts);

for (const part of parts) {
	console.log(`${part} (${part.length}文字)`);
}

// Numberオブジェクト
const userAge = Number.parseInt(inputAge, 10);
console.log(userAge);

if (Number.isNaN(userAge)) {
	console.log("年齢が正しく入力されていません");
}

// Mathオブジェくと
const greeds = ["おはよう", "こんにちは", "こんばんは"];
// ランダムのテンプレ　ランダムは0～1しか返ってこない
// const random = Math.floor(Math.random() * 最大値);
const random = Math.floor(Math.random() * greeds.length);
console.log(greeds[random]);
