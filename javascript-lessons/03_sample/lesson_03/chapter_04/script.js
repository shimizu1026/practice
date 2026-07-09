const age = prompt("年齢を入力してください");

if (age >= 20 && age < 30) {
  console.log("あなたは20代です");
}

if (!age) {
  console.log("年齢をちゃんと入力してください");
}
