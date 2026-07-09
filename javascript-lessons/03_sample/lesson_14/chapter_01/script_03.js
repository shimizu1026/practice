const template = document.querySelector("[data-template]");

// クローンを作成（子要素も含む）
// template要素.content を使って、中身だけ複製
const clone = template.content.cloneNode(true);

// 内容を設定してから使用
clone.querySelector(".card-title").textContent = "タイトル";
clone.querySelector(".card-text").textContent = "テキスト";

console.log(clone);
