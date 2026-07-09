const scrollButtons = document.querySelectorAll('a[href^="#"]');
const scrollCountDisplay = document.querySelector("[data-scroll]");

// スムーススクロール
scrollButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = button.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// スクロールイベント
window.addEventListener("scroll", () => {
  scrollCountDisplay.textContent = `${window.scrollY}px`;
});
