<?php
  // ファイルの読み込み
  require_once('inc/config.php');

  try {
    // データベースへ接続
    $dbh = new PDO(DSN, DB_USER, DB_PASSWORD);

    // エラー発生時に「PDOException」という例外を投げる設定に変更
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo '接続成功';
  } catch (PDOException $e) {
    //　例外発生時の処理
    echo 'エラー' . htmlspecialchars($e->getMessage(), ENT_QUOTES, 'UTF-8');
    exit();
  }
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
