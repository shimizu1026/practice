if (confirm("お振込しますか？")) {
  const price = prompt("お振込金額を入力してください");

  let isError = false; // エラーフラグ

  if (!price) {
    isError = true;
    alert("金額を入力してください");
  }

  if (price && price < 1000) {
    isError = true;
    alert("1000円未満のお振込みはできません");
  }

  if (!isError) {
    alert(`${price}円お振込しました`);
  }
} else {
  alert("振込をキャンセルしました");
}
