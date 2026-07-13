
const isConfirmed = confirm("お振込しますか？");

if (isConfirmed) {
	const amount = prompt("お振り込み金額を入力");

	if (!amount) {
		alert("金額を入力してください");
	}

	if (amount && amount < 1000) {
		alert("1000円未満のお振込みはできません");
	}

	if (amount && amount >= 1000) {
		alert(`${amount}円お振込しました`);
	}
} else {
	alert("振込をキャンセルしました");
}