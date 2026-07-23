// タイマー処理

let counter = 10;
let timerId;

// カウントダウンを行う関数
const countDown = () => {
	console.log(`残り: ${counter}秒`);

	if (counter <= 0) {
		alert("時間です");
		clearInterval(timerId);
		return;
	}

	counter--;
}

// setTimeout
setTimeout(() => {
	timerId = setInterval(countDown, 1000);
}, 3000);

// setInterval()
// timerId = setInterval(countDown, 1000);