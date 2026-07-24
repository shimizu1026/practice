const inputName = prompt("フルネームをローマ字で入力してください") || "";
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