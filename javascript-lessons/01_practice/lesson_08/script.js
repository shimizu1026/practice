// タイマー処理

let counter = 10;
let position = 0;//現在地
let timerId;
let rafId;

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

// アニメーションを実行する関数
const run = () => {
	console.log(`現在の位置： ${position}`);

	if (counter <= 0) {
		alert("終了");
		cancelAnimationFrame(rafId);
		return;
	}

	position += 10;//自身に10を加算して代入
	rafId = requestAnimationFrame(run);
}

// setTimeout
setTimeout(() => {
	timerId = setInterval(countDown, 1000);
	rafId = requestAnimationFrame(run);
}, 3000);


// setInterval()
// timerId = setInterval(countDown, 1000);