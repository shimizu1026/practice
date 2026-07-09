// 要素の取得
const dateElem = document.querySelector("[data-date]");
const timeElem = document.querySelector("[data-time]");

// 日付の表示
dateElem.textContent = new Date().toLocaleDateString("ja-JP", {
  year: "numeric", // 年 (4桁)
  month: "2-digit", // 月 (2桁)
  day: "2-digit", // 日 (2桁)
  timeZone: "Asia/Tokyo", // タイムゾーンを日本に設定
});

// 時刻の表示関数
const updateClock = () => {
  timeElem.textContent = new Date().toLocaleString("ja-JP", {
    hour: "2-digit", // 時 (2桁)
    minute: "2-digit", // 分 (2桁)
    second: "2-digit", // 秒 (2桁)
    hour12: false, // 24時間表記
    timeZone: "Asia/Tokyo", // タイムゾーンを日本に設定
  });
};

updateClock(); // 初回表示
setInterval(updateClock, 1000); // 毎秒更新
