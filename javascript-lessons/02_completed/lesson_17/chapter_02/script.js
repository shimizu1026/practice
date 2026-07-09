// 要素の取得
const metaViewport = document.querySelector('meta[name="viewport"]');
const scrollLinks = document.querySelectorAll('a[href^="#"]');

// レスポンシブviewport制御
function updateViewport() {
  const threshold = 375;

  const value = window.outerWidth > threshold ? "width=device-width" : `width=${threshold}`;

  metaViewport.setAttribute("content", value);
}

// リサイズイベント
window.addEventListener("resize", updateViewport);

// 初期化
updateViewport();

// スムーススクロール
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
