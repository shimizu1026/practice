// フルネームをローマ字で定義
const fullName = "Yamada Taro";

// length：文字数を取得（スペースも1文字としてカウントされる）
console.log(fullName.length); // 13

// toUpperCase()：すべて大文字に変換
console.log(fullName.toUpperCase()); // "YAMADA TARO"

// toLowerCase()：すべて小文字に変換
console.log(fullName.toLowerCase()); // "yamada taro"

// slice()：0文字目から6文字目まで取り出す
console.log(fullName.slice(0, 6)); // "Yamada"

// split()：半角スペース区切りで配列に分割
const parts = fullName.split(" ");
console.log(parts); // ["Yamada", "Taro"]

// replace()：文字列の一部を置き換える（最初の一致のみ）
const renamed = fullName.replace("Taro", "Hanako");
console.log(renamed); // "Yamada Hanako"

// replaceAll()：文字列のすべての一致を置き換える
const transformName = fullName.replace("a", "o");
console.log(transformName); // "Yomodo Toro"

// includes()：特定の文字列が含まれているか確認
console.log(fullName.includes("Yamada")); // true
console.log(fullName.includes("Sato")); // false

// trim()：余分な空白を取り除く
const inputName = "  Yamada Taro  ";
console.log(inputName.trim()); // "Yamada Taro"
