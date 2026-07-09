const linkElem = document.querySelector("[data-link]");
const targetElem = document.querySelector("[data-display='target']");
const currentTargetElem = document.querySelector("[data-display='current-target']");

linkElem.addEventListener("click", (event) => {
  // デフォルトの機能（リンク）を無効化
  event.preventDefault();

  // イベントが発生した要素の取得（子要素も含む）
  const target = event.target;
  console.log(target);

  // イベントが発生したイベントリスナーの要素を取得
  const currentTarget = event.currentTarget;
  console.log(currentTarget);

  // 画面表示
  targetElem.textContent = target.innerHTML;
  currentTargetElem.textContent = currentTarget.innerHTML;
});
