const inputName = prompt("フルネームをローマ字で入力してください。）") || "";

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
