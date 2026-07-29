// 名前	タイプ	攻撃力	捕まえた日時
// ピカチュウ	でんき	55	2025-06-10T08:30:00
// ゼニガメ	みず	48	2025-06-05T12:00:00
// フシギダネ	くさ	49	2025-06-07T15:45:00
// ヒトカゲ	ほのお	52	2025-06-04T09:20:00
// イーブイ	ノーマル	55	2025-06-06T10:15:00
// ニャース	ノーマル	45	2025-06-08T17:00:00
// コイキング	みず	10	2025-06-03T08:00:00
// リザードン	ほのお	84	2025-06-11T13:10:00
// カイリュー	ドラゴン	100	2025-06-09T19:00:00
// ライチュウ	でんき	90	2025-06-10T20:45:00
// 上記表を参考に、ポケモン情報の配列を作成する（要素はオブジェクト形式で）
const pokemon = [
	{
		name: "ピカチュウ",
		type: "でんき",
		power: 55,
		date: "2025-06-10T08:30:00",
	},
	{
		name: "ゼニガメ",
		type: "みず",
		power: 48,
		date: "2025-06-05T12:00:00",
	},
	{
		name: "フシギダネ",
		type: "くさ",
		power: 49,
		date: "2025-06-07T15:45:00",
	},
	{
		name: "ヒトカゲ",
		type: "ほのお",
		power: 52,
		date: "2025-06-04T09:20:00",
	},
	{
		name: "イーブイ",
		type: "ノーマル",
		power: 55,
		date: "2025-06-06T10:15:00",
	},
	{
		name: "ニャース",
		type: "ノーマル",
		power: 45,
		date: "2025-06-08T17:00:00",
	},
	{
		name: "コイキング",
		type: "みず",
		power: 10,
		date: "2025-06-03T08:00:00",
	},
	{
		name: "リザードン",
		type: "ほのお",
		power: 84,
		date: "2025-06-11T13:10:00",
	},
	{
		name: "カイリュー",
		type: "ドラゴン",
		power: 100,
		date: "2025-06-09T19:00:00",
	},
	{
		name: "ライチュウ",
		type: "でんき",
		power: 90,
		date: "2025-06-10T20:45:00",
	},
]
// 入力ダイアログで、絞り込みたい タイプ を入力（例：でんき）
const sortType = prompt("絞り込みたい タイプ を入力");
// 入力ダイアログで、絞り込みたい 最低攻撃力 を入力（例：50）
const sortPower = prompt("絞り込みたい 最低攻撃力 を入力");
// 入力ダイアログで、検索したい 名前のキーワード を入力（例：チュウ）
const sortName = prompt("検索したい 名前のキーワード を入力");
// 入力されたすべての条件に一致するポケモンを、捕まえた日時の新しい順に並べた配列を作成（入力が空だった場合はその条件を無視してよいものとする。）
const filteredPokemon = pokemon.filter((pokemon) => {
	const { name, type, power } = pokemon;
	const matchesType = sortType ? type === sortType : true
	const matchesPower = sortPower ? power >= Number(sortPower) : true
	const matchesName = sortName ? name.includes(sortName) : true
	return matchesName && matchesPower && matchesType;

}).sort((a, b) => new Date(b.date) - new Date(a.date));
// 並び替えた配列をループして、 「名前 | タイプ | 攻撃力 | 捕まえた日時（任意の形式にフォーマット）」をコンソールに出力

filteredPokemon.forEach((pokemon) => {
	const { name, type, power, date } = pokemon;
	const formattedDate = new Date(date).toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
	console.log(`${name}|${type}|${power}|${formattedDate}`);
})

// 条件に一致したポケモンの数をコンソールに出力
console.log(`${filteredPokemon.length}匹`);