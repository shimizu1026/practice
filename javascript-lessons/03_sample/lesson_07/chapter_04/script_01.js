// 関数の定義（アロー関数）
const calculateAttack = (power, level) => {
  return power * level;
};

// 関数を実行して変数に代入
const pikachuAttack = calculateAttack(55, 10);
console.log(`ピカチュウの攻撃力は ${pikachuAttack} です！`);

const hitokageAttack = calculateAttack(40, 20);
console.log(`ヒトカゲの攻撃力は ${hitokageAttack} です！`);
