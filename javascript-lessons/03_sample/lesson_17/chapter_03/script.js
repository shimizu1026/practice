const targetButton = document.querySelector("[data-target]");
const infoPanel = document.querySelector("[data-info]");

targetButton.addEventListener("click", () => {
  const rect = targetButton.getBoundingClientRect();

  infoPanel.innerHTML = `
    <h3>位置情報</h3>
    <p>Top: ${rect.top.toFixed(2)}px</p>
    <p>Left: ${rect.left.toFixed(2)}px</p>
    <p>Width: ${rect.width.toFixed(2)}px</p>
    <p>Height: ${rect.height.toFixed(2)}px</p>
  `;
});
