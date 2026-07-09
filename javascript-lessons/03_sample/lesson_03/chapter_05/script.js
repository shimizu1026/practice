const msg1 = "constだよ";
let msg2 = "letだよ";
var msg3 = "varだよ";

if (msg1) {
  console.log(msg1);
  console.log(msg2);
  console.log(msg3);

  const msg4 = "ブロック内のconstだよ";
  let msg5 = "ブロック内のletだよ";
  var msg6 = "ブロック内のvarだよ";
}

console.log(msg4); // ReferenceError: msg4 is not defined
console.log(msg5); // ReferenceError: msg5 is not defined
console.log(msg6); // ブロック内のvarだよ
