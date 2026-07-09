const themeElem = document.querySelector("[data-theme]");

// テーマの切り替え
themeElem.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
