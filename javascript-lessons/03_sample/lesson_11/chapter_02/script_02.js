const items = document.querySelectorAll(".item");
console.log(items);

// itemsの最初の要素をコンソールに出力
console.log(items[0]);

// itemsの長さ（要素数）をコンソールに出力
console.log(items.length);

// itemsをforEachでループして、各要素をコンソールに出力
items.forEach((item) => {
  console.log(item);
});
