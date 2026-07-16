
const count = prompt("数字を入力");


for (let i = 1; i <= count; i++) {

	// 数字が3の倍数のとき： （あほ）
	if (i % 3 === 0) {
		console.log("あほ");
	}
	// 数字が5の倍数のとき： （犬）
	else if (i % 5 === 0) {
		console.log("犬");
	}
}





