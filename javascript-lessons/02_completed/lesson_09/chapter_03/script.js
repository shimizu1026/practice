const inputName = prompt("フルネームをローマ字で入力してください。）") || "";
const inputAge = prompt("年齢を入力してください。") || "";

// Stringオブジェクト
const renamed = inputName.replaceAll("　", " ");
const userName = renamed.trim();

// const userName = inputName.replaceAll("　", " ").trim(); でも同じ結果になります。
console.log(userName);

const upperCaseName = userName.toUpperCase();
console.log(upperCaseName);

if (upperCaseName.includes("Y")) {
  console.log("あなたの名前に 'Y' が含まれていますね。");
} else {
  console.log("あなたの名前に 'Y' は含まれていませんね。");
}

const parts = userName.split(" ");
console.log(parts);

for (const part of parts) {
  console.log(`${part}（${part.length}文字）`);
}

// Numberオブジェクト
const userAge = Number.parseInt(inputAge, 10);
console.log(userAge);

if (Number.isNaN(userAge)) {
  console.log("年齢が正しく入力されていません。");
}

// Mathオブジェクト
const greeds = ["おはよう", "こんにちは", "こんばんは"];
const random = Math.floor(Math.random() * greeds.length);

console.log(greeds[random]);
