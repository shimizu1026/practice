for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    console.log(`3の倍数を見つけた：${i}`);
    break; // ループを抜ける
  }

  console.log(`${i}は3の倍数ではない`);
}
