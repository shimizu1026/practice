// 要素の取得
const messageElem = document.querySelector(".message");
const listItems = document.querySelectorAll(".item");

// 要素の内容をコンソールに出力
console.log(messageElem);
console.log(listItems);

// listItems をループで出力
listItems.forEach((item) => {
  console.log(item);
});

// HTMLの取得と変更
console.log(messageElem.innerHTML);
messageElem.innerHTML = "<em>JavaScript</em>でこの要素を変更";

// テキストの取得と変更
listItems.forEach((item) => {
  console.log(item.textContent);
  item.textContent = item.textContent.replace("難しい", "簡単");
});
