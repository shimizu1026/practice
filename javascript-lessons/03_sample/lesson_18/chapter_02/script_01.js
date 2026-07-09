// 要素の取得
const resizeElement = document.querySelector("[data-resize-trigger]");

// コールバック関数
function handleResize(entries) {
  entries.forEach((entry) => {
    const infoElement = entry.target.querySelector("p");

    const { inlineSize: contentInlineSize, blockSize: contentBlockSize } = entry.contentBoxSize[0];
    const { inlineSize: BorderInlineSize, blockSize: BorderBlockSize } = entry.borderBoxSize[0];
    const { top, left } = entry.contentRect;

    // サイズ情報を表示
    infoElement.innerHTML = `
      <strong>サイズ情報</strong><br>
      ContentBox: ${contentInlineSize}px × ${contentBlockSize}px<br>
      BorderBox: ${BorderInlineSize}px × ${BorderBlockSize}px<br>
      Top: ${top}px<br>
      Left: ${left}px<br>
    `;
  });
}

// Resize Observer作成・監視開始
const resizeObserver = new ResizeObserver(handleResize);
resizeObserver.observe(resizeElement);
