// 要素の取得
const messageElm = document.querySelector(".message");
const listItems = document.querySelectorAll(".item");
console.log(messageElm);
console.log(listItems);

// listItemをループで出力
listItems.forEach((listItem) => {
	console.log(listItem);
})

// HTMLの取得と変更
console.log(messageElm.innerHTML);
messageElm.innerHTML = "<em>JavaScript</em>でこの要素を変更！";

// テキストの取得と変更
listItems.forEach((item) => {
	console.log(item.textContent);
	item.textContent = item.textContent.replace("難しい", "簡単");
})