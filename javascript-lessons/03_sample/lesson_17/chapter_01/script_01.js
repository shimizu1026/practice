const screenSizeDisplay = document.querySelector("[data-screen-size]");
const deviceTypeDisplay = document.querySelector("[data-device-type]");
const reducedMotionDisplay = document.querySelector("[data-reduced-motion]");

// メディアクエリの定義
const mobileQuery = window.matchMedia("(max-width: 767px)");
const tabletQuery = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
const desktopQuery = window.matchMedia("(min-width: 1024px)");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

// スクリーンサイズ
const updatesScreenSize = () => {
  screenSizeDisplay.textContent = `${window.innerWidth}px × ${window.innerHeight}px`;
};

// デバイス種別の更新
const updateDeviceType = () => {
  if (mobileQuery.matches) {
    deviceTypeDisplay.textContent = "📱 スマホ";
  }

  if (tabletQuery.matches) {
    deviceTypeDisplay.textContent = "📱 タブレット";
  }

  if (desktopQuery.matches) {
    deviceTypeDisplay.textContent = "🖥️ デスクトップ";
  }
};

// 視差効果を減らすオプションの更新
const updateReducedMotion = () => {
  reducedMotionDisplay.textContent = reducedMotionQuery.matches ? "はい" : "いいえ";
};

// イベントリスナーの設定
window.addEventListener("resize", updatesScreenSize);
mobileQuery.addEventListener("change", updateDeviceType);
tabletQuery.addEventListener("change", updateDeviceType);
desktopQuery.addEventListener("change", updateDeviceType);
reducedMotionQuery.addEventListener("change", updateReducedMotion);

// 初期化
updatesScreenSize();
updateDeviceType();
updateReducedMotion();
