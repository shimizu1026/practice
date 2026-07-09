// 現在の日時を取得
const now = new Date();
console.log(now); // 現在の日時を表示

// 特定の日時を作成
const christmas = new Date(2025, 11, 24);
console.log(christmas); // 2025年12月24日を表示

// getFullYear: 年を取得
console.log(now.getFullYear()); // 現在の年を表示

// getMonth: 月を取得（0が1月、11が12月）
console.log(now.getMonth()); // 現在の月を表示（0〜11）

// getDate: 日を取得
console.log(now.getDate()); // 現在の日を表示

// getDay: 曜日を取得（0が日曜日、6が土曜日）
console.log(now.getDay()); // 現在の曜日を表示（0〜6）

// getHours: 時を取得
console.log(now.getHours()); // 現在の時を表示（0〜23）

// getMinutes: 分を取得
console.log(now.getMinutes()); // 現在の分を表示（0〜59）

// getSeconds: 秒を取得
console.log(now.getSeconds()); // 現在の秒を表示（0〜59）

// getTime: エポックからのミリ秒を取得
console.log(now.getTime()); // 1970年1月1日からのミリ秒を表示

// toLocaleString: 特定のロケールで表示
console.log(now.toLocaleString("ja-JP")); // 現在の日付を日本のローカル形式で表示

// tolocaleString: 特定のロケールとオプションで表示
console.log(
  now.toLocaleString("ja-JP", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
); // 現在の日付を日本のローカル形式で詳細に表示

// toISOString: ISO形式の文字列に変換
console.log(now.toISOString()); // 現在の日時をISO形式で表示

// クリスマスまでの残り日数を計算
const timeDiff = christmas.getTime() - now.getTime(); // ミリ秒単位の差を計算
const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // ミリ秒を日数に変換
console.log(`クリスマスまであと ${daysLeft} 日です。`); // 残り日数を表示
