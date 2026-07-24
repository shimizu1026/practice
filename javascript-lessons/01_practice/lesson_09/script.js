const inputName = prompt("フルネームをローマ字で入力してください") || "";
// falsyだったら空文字を返す

// if (!inputName) {
// 	inputName = "";
// }
// String オブジェクト
const renamed = inputName.replaceAll("　", " ");

console.log(renamed);