const members = [
  {
    name: "ピカチュウ",
    nickname: "ぴかお",
    type: "でんき",
    level: 25,
  },
  {
    name: "ヒトカゲ",
    nickname: "ひとくん",
    type: "ほのお",
    level: 30,
  },
  {
    name: "ゼニガメ",
    nickname: "ゼニちゃん",
    type: "みず",
    level: 28,
  },
];

// ループ処理
for (const member of members) {
  const { name, nickname, level } = member;
  console.log(`${nickname}（${name}）| Level ${level}`);
}
