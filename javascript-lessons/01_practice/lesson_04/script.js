// while
const count = prompt("何回繰り返しますか");
const searchNumber = prompt("何番を探しますか");
const avoidNumber = prompt("何番をスキップしますか");

let i = 1;//ループ用変数の初期値

while (i <= count) {
	// iがcount以下の間繰り返す

	if (i === Number(searchNumber)) {
		console.log(`${searchNumber}を見つけました`);
		break;
	}
	console.log(`whileで${i}回目のループ`);
	i++;//ループ用変数の加算（インクリメント）
}

// for
for (let i = 1; i <= count; i++) {

	if (i === Number(avoidNumber)) {
		console.log(`${avoidNumber}晩はスキップします`);
		continue;
	}
	console.log(`forで${i}回目のループ`);
}