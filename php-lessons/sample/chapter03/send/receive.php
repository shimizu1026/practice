<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>データの受け取り</title>
</head>
<body>
  <h1>データの受け取り</h1>
  <?php
    // GETの受け取り
    // echo 'こんにちは'. $_GET['your_name'] .'さん';

    // POSTの受け取り
    // echo 'こんにちは'. $_POST['your_name'] .'さん';

    // XSS対策
    echo 'こんにちは'. htmlspecialchars( $_POST['your_name'], ENT_QUOTES, 'utf-8' ) .'さん';
  ?>
</body>
</html>