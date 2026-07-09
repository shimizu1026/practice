// 配列の作成
const members = [
  {
    name: "ピカチュウ",
    type: "でんき",
    power: 12,
  },
  {
    name: "ゼニガメ",
    type: "みず",
    power: 10,
  },
  {
    name: "サンダー",
    type: "でんき",
    power: 15,
  },
  {
    name: "コイキング",
    type: "みず",
    power: 1,
  },
];

// forEach: 配列の各要素を順に処理するメソッド
members.forEach((member) => {
  console.log(member.name);
});

// map: 配列の各要素を変換して新しい配列を作成するメソッド
const names = members.map((member) => {
  return member.name;
});

console.log(names); // ["ピカチュウ", "ゼニガメ", "サンダー", "コイキング"]

// filter: 条件に合う要素だけを抽出して新しい配列を作成するメソッド
const electricMembers = members.filter((member) => {
  return member.type === "でんき";
});

console.log(electricMembers);
// [
//   { name: 'ピカチュウ', type: 'でんき', power: 12 },
//   { name: 'サンダー', type: 'でんき', power: 15 }
// ]

// find: 条件に合う最初の要素を返すメソッド
const firstWaterMember = members.find((member) => {
  return member.type === "みず";
});

console.log(firstWaterMember); // { name: 'ゼニガメ', type: 'みず', power: 10 }

// some: 配列の中に条件を満たす要素があるか確認するメソッド
const hasWeakMember = members.some((member) => {
  return member.power < 10;
});

console.log(hasWeakMember); // true（コイキングのパワーが1で条件を満たす）

// every: 配列の全ての要素が条件を満たすか確認するメソッド
const isAllElectric = members.every((member) => {
  return member.type === "でんき";
});
console.log(isAllElectric); // false（全ての要素が「でんき」ではないため）

// reduce: 配列の要素を1つにまとめるメソッド
const totalPower = members.reduce((sum, member) => {
  return sum + member.power;
}, 0);
console.log(totalPower); // 38（全てのパワーの合計）
