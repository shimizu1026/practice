// while
const count = prompt("何回繰り返しますか");

let i = 1;//ループ用変数の初期値

while (i <= count) {
	// iがcount以下の間繰り返す
	console.log(`whileで${i}回目のループ`);
	i++;//ループ用変数の加算（インクリメント）
}

// for
for (let i = 1; i <= count; i++) {
	console.log(`forで${i}回目のループ`);
}