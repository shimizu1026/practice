const age = prompt("年齢を入力してください");

if (age >= 20) {
  console.log("あなたはお酒を飲むことができます");
}

if (age < 20) {
  console.log("あなたはお酒を飲むことができません");
}

if (age === "") {
  console.log("年齢を入力してください");
}
