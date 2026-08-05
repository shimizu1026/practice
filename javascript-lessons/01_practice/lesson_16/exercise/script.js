const openButton = document.querySelector('[data-command="show-modal"]');
const submitButton = document.querySelector('[data-command="submit"]');


// 「入力確認」ボタンを押すと、入力内容をチェックし、エラーがなければ入力内容をモーダルウインドウに表示するようにする

//  モーダルウインドウ内の「修正」ボタンを押すと、モーダルウインドウが閉じるようする

//  モーダルウインドウ内の「送信」ボタンを押すと、入力内容を submit() で送信し、モーダルウインドウが閉じるようする

//  モーダルウインドウの背景（外側）をクリックしたら、モーダルウインドウが閉じるようする