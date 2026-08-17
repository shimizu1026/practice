<?php
  // ファイルの読み込み
  require_once('inc/config.php');
  
  // データベースへ接続
  $dbh = new PDO(DSN, DB_USER, DB_PASSWORD); 
  echo '接続成功';
 
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>新着記事一覧</title>
</head>
<body>
  <h1>新着情報</h1>

</body>
</html>