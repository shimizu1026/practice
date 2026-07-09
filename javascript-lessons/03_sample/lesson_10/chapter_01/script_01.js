// 配列の作成
const members = ["ヒトカゲ", "ゼニガメ", "フシギダネ"];

// length: 配列の要素数
console.log(members.length); // 3

// push: 配列の末尾に要素を追加
members.push("イーブイ");

// unshift: 配列の先頭に要素を追加
members.unshift("ピカチュウ");
console.log(members); // ["ピカチュウ", "ヒトカゲ", "ゼニガメ", "フシギダネ", "イーブイ"]

// pop: 配列の末尾の要素を取り除く
members.pop(); // "イーブイ" を取り除く

// shift: 配列の先頭の要素を取り除く
members.shift(); // "ピカチュウ" を取り除く
console.log(members); // ["ヒトカゲ", "ゼニガメ", "フシギダネ"]

// sort: 配列の要素を並び替え
members.sort();
console.log(members); // ["ゼニガメ", "ヒトカゲ", "フシギダネ"] （Unicode順）

// reverse: 配列の要素を逆順に並び替え
members.reverse();
console.log(members); // ["フシギダネ", "ヒトカゲ", "ゼニガメ"]

// includes: 配列に特定の要素が含まれているかをチェック
console.log(members.includes("ヒトカゲ")); // true

// indexOf: 配列内の特定の要素のインデックスを取得
console.log(members.indexOf("ヒトカゲ")); // 1

// slice: 配列の一部を切り出して新しい配列を作成
const slicedMembers = members.slice(1, 3); // インデックス1から2までの要素を切り出す
console.log(slicedMembers); // ["ヒトカゲ", "ゼニガメ"]

// join: 配列の要素を文字列として結合
const membersString = members.join(" と ");
console.log(membersString); // "フシギダネ と ヒトカゲ と ゼニガメ"

// Array.isArray: 配列かどうかを確認
console.log(Array.isArray(members)); // true
