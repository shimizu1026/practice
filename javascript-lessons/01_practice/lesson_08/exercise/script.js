// Chapter4」の練習問題で作成した「ナベアツ」プログラムを、1秒ごとに数字をカウントするプログラムを作成する。
let counter = 1;
let timerId;
let rafId;

// 「1」〜「30」までを1秒ごとにコンソールに出力
const countDown = () => {
	console.log(`${counter}秒`);

	if (counter >= 30) {
		// 30まで数え終わった時、警告ダイアログで「オモロー」と表示する
		alert("オモロー");
		clearInterval(timerId);
		return;
	}
}

// 上記数値を出力する際、数字が3の倍数のときは、（あほ）、5の倍数のときは、（犬） を数値の横に付けて出力する
const nabeatu = () => {
	if (counter % 3) {
		console.log(`counter "あほ"`);
	} else if (counter % 5 === 0) {
		console.log(`counter "犬"`);
	}
}
rafId = requestAnimationFrame();

