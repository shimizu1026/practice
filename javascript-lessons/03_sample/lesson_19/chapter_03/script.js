const themeSelect = document.querySelector("[data-theme-select]");

// テーマを適用する関数
const applyTheme = (theme) => {
  document.body.setAttribute("data-theme", theme);
};

// テーマ変更イベント
themeSelect.addEventListener("change", () => {
  try {
    const selectedTheme = themeSelect.value;
    localStorage.setItem("theme", selectedTheme);
    applyTheme(selectedTheme);
  } catch (error) {
    console.error("テーマの保存に失敗:", error);
  }
});

// ページ読み込み時にテーマを復元
window.addEventListener("load", () => {
  try {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      themeSelect.value = savedTheme;
      applyTheme(savedTheme);
    }
  } catch (error) {
    console.error("テーマの復元に失敗:", error);
  }
});
