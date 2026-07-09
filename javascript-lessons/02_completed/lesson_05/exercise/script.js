// 手持ちのポケモン一覧
const party = ["ヒトカゲ", "フシギダネ", "ゼニガメ"];

if (confirm("野生のピカチュウが現れた！捕まえますか？")) {
  party.push("ピカチュウ");
  alert("ピカチュウを捕まえた！");
}

// 戦うポケモンを選ぶ
const chosenName = prompt("野生のミューツーが現れた！戦うポケモンを選んでください");

let selected = null; // ステージの初期値
for (const pokemon of party) {
  if (chosenName === pokemon) {
    selected = pokemon;
    break; // ループを抜ける
  }
}

if (selected) {
  alert(`いけ！${selected}！`);
} else {
  alert(`${chosenName}を持っていません。サトシは逃げた！`);
}
