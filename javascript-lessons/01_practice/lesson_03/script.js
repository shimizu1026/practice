// if文

// 確認ダイアログボックスを出してその結果によって処理を分ける
const isConfirmed = confirm("お食事をはじめますか");

if (isConfirmed) {
	console.log("OKが押されました");
} else {
	// falseの処理
	console.log("キャンセルされました");
}