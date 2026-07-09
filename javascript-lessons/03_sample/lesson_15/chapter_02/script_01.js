const selectElem = document.querySelector("[data-font-select]");

// changeイベント
selectElem.addEventListener("change", (event) => {
  const selected = event.target.value; // 選択内容の取得

  document.body.style.setProperty("--font-family", `"${selected}"`);
});
