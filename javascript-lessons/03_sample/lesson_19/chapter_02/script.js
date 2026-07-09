const memoTextarea = document.querySelector("[data-memo]");
const saveMemoButton = document.querySelector("[data-save-memo]");
const clearMemoButton = document.querySelector("[data-clear-memo]");

// メモを保存する関数
const saveMemo = () => {
  try {
    const memoContent = memoTextarea.value;
    sessionStorage.setItem("workMemo", memoContent);
    alert("メモを一時保存しました");
  } catch (error) {
    console.error("メモの保存に失敗:", error);
    alert("保存に失敗しました");
  }
};

// メモを読み込む関数
const loadMemo = () => {
  try {
    const savedMemo = sessionStorage.getItem("workMemo");
    if (savedMemo) {
      memoTextarea.value = savedMemo;
    }
  } catch (error) {
    console.error("メモの読み込みに失敗:", error);
  }
};

// メモをクリアする関数
const clearMemo = () => {
  try {
    sessionStorage.removeItem("workMemo");
    memoTextarea.value = "";
    alert("メモをクリアしました");
  } catch (error) {
    console.error("メモのクリアに失敗:", error);
  }
};

// イベントリスナー
saveMemoButton.addEventListener("click", saveMemo);
clearMemoButton.addEventListener("click", clearMemo);

// ページ読み込み時にメモを復元
window.addEventListener("load", loadMemo);
