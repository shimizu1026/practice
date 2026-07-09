// ポケモンの攻撃力を計算する関数
function calculateAttack(power, level) {
  const attack = power * level;
  return attack; // ← 計算結果を外に返す
}

// 関数を実行して変数に代入
const pikachuAttack = calculateAttack(55, 10);
console.log(`ピカチュウの攻撃力は ${pikachuAttack} です！`);

const hitokageAttack = calculateAttack(40, 20);
console.log(`ヒトカゲの攻撃力は ${hitokageAttack} です！`);
