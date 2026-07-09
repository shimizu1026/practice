const pokemons = [
  { name: "ピカチュウ", type: "でんき", power: 55, caughtAt: "2025-06-10T08:30:00" },
  { name: "ゼニガメ", type: "みず", power: 48, caughtAt: "2025-06-05T12:00:00" },
  { name: "フシギダネ", type: "くさ", power: 49, caughtAt: "2025-06-07T15:45:00" },
  { name: "ヒトカゲ", type: "ほのお", power: 52, caughtAt: "2025-06-04T09:20:00" },
  { name: "イーブイ", type: "ノーマル", power: 55, caughtAt: "2025-06-06T10:15:00" },
  { name: "ニャース", type: "ノーマル", power: 45, caughtAt: "2025-06-08T17:00:00" },
  { name: "コイキング", type: "みず", power: 10, caughtAt: "2025-06-03T08:00:00" },
  { name: "リザードン", type: "ほのお", power: 84, caughtAt: "2025-06-11T13:10:00" },
  { name: "カイリュー", type: "ドラゴン", power: 100, caughtAt: "2025-06-09T19:00:00" },
  { name: "ライチュウ", type: "でんき", power: 90, caughtAt: "2025-06-10T20:45:00" },
];

const inputType = prompt("絞り込むタイプを入力してください（空で無視）");
const inputPower = prompt("最低攻撃力を入力してください（空で無視）");
const inputName = prompt("名前に含まれるキーワードを入力してください（空で無視）");

const filtered = pokemons
  .filter((pokemon) => {
    const matchesType = inputType ? pokemon.type === inputType : true;
    const matchesPower = inputPower ? pokemon.power >= Number(inputPower) : true;
    const matchesName = inputName ? pokemon.name.includes(inputName) : true;
    return matchesType && matchesPower && matchesName;
  })
  .sort((a, b) => new Date(b.caughtAt) - new Date(a.caughtAt));

filtered.forEach((pokemon) => {
  const { name, type, power, caughtAt } = pokemon;

  const formattedDate = new Date(caughtAt).toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  console.log(`${name} | ${type} | ${power} | ${formattedDate}`);
});

console.log(`条件に一致したポケモン: ${filtered.length}匹`);
