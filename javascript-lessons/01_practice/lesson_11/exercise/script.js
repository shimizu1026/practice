// 24時間表記のデジタル時計を作成する
// 毎秒カウントするために一定時間で同じ処理をし続ける
// 1秒ごとに現在の時間を出す
const date = document.querySelector(".date");
const time = document.querySelector(".time");

// console.log(date);
// console.log(time);


// console.log(newTime.getHours());
// console.log(newTime.getMinutes());
// console.log(newTime.getSeconds());



setInterval(() => {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0");

	time.textContent = (`${hours}:${minutes}:${seconds}`);

	const year = String(now.getFullYear());
	const month = String(now.getMonth() + 1);
	const day = String(now.getDate());
	// console.log(year);
	// console.log(month);
	// console.log(date);
	date.textContent = (`${year}/${month}/${day}`);
}, 1000);

