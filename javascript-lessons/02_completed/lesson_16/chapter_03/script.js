// 要素の取得
const drawer = document.querySelector("[data-drawer]");
const openButton = document.querySelector('[data-command="show-modal"]');
const closeButton = document.querySelector('[data-command="close"]');

// イベントリスナー
openButton.addEventListener("click", () => {
  drawer.showModal();
});

closeButton.addEventListener("click", () => {
  drawer.close();
});

// 背景クリック機能
drawer.addEventListener("click", (event) => {
  // ダイアログの位置とサイズを取得
  const rect = drawer.getBoundingClientRect();

  // クリック位置がダイアログの範囲外かどうかを判定
  const isOutside =
    event.clientX < rect.left || // 左端より左
    event.clientX > rect.right || // 右端より右
    event.clientY < rect.top || // 上端より上
    event.clientY > rect.bottom; // 下端より下

  // 範囲外の場合はダイアログを閉じる
  if (isOutside) {
    drawer.close();
  }
});
