// if文

// 確認ダイアログボックスを出してその結果によって処理を分ける
const isConfirmed = confirm("お食事をはじめますか");

if (isConfirmed) {
	console.log("OKが押されました");

	const age = Number(prompt("年齢を入力してください。"))// promptは文字列で受け取る,数値型にするにはNumberに入れる

	// 比較演算子
	if (age >= 20) {
		console.log("成人ですね")
	}

	if (age == 20) {
		console.log("20歳ですね")
	}

	if (age === 20) {
		console.log("20歳ですね")
	}
	// 	論理演算子
	if (age >= 20 && age < 60) {
		console.log("20歳以上60歳未満の方:5,000円");
	}

	if (age && (age < 20 || age >= 60)) {
		console.log("20歳未満または、60歳以降の方:1,000円");
	}

	if (!age) {
		console.log("年齢を入力していない方:100,000円");
	}
} else {
	// falseの処理
	console.log("キャンセルされました");
}

console.log(age);