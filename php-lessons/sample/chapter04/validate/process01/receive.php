<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>if文による入力内容のチェック</title>
</head>
<body>
<?php
  // 必須項目チェック
  if ( $_POST['your_name'] == '' ) {
    // $_POST['your_name'] が 空白 と等しい時の処理
    echo '<p>お名前を入力して下さい。</p>';
  }
?>
</body>
</html>