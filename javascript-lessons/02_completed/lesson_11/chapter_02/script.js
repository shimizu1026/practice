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
