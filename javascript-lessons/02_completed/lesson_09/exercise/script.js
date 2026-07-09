// 名前を取得（未入力やキャンセルされた場合は「名無し」）
const inputName = prompt("名前を入力してください。") || "名無し";

// 全角スペースを半角スペースに変換し、前後の空白を削除
const userName = inputName.replaceAll("　", " ").trim();

// 運勢一覧
const fortunes = [
  "大吉！最高の1日になりそう！",
  "中吉。まあまあの運勢です。",
  "小吉。ちょっといいことあるかも。",
  "吉。安定した日になりそう。",
  "末吉。注意深くすごそう。",
  "凶…落ち着いて行動しよう。",
];

// ラッキーアイテム一覧
const luckyItems = ["赤い靴下", "青いペン", "黄色い花", "緑の本", "黒い帽子", "白いシャツ", "ピンクのマグカップ", "オレンジのスカーフ", "紫の手袋", "茶色のバッグ"];

// 運勢をランダムに選ぶ
const randomFortuneIndex = Math.floor(Math.random() * fortunes.length);

const fortune = fortunes[randomFortuneIndex];

// 名前の文字数を取得（半角スペースを含む）
const nameLength = userName.length;

// 名前の文字数がラッキーアイテムの数を超える場合、ラッキーアイテムのインデックスを調整（名前の文字数と、配列の要素数（1減らす）を比べて小さい方をインデックスとする）
const luckyItemIndex = Math.min(nameLength, luckyItems.length - 1);

// ラッキーアイテムを選ぶ
const luckyItem = luckyItems[luckyItemIndex];

// メッセージの作成
const message = `${userName}さんの今日の運勢は「${fortune}」です。ラッキーアイテムは「${luckyItem}」です。`;

// メッセージを表示
alert(message);
