<?php
  // ファイルの読み込み
  require_once('inc/config.php');
  require_once('inc/functions.php');

  try {
    // データベースへ接続
    $dbh = new PDO(DSN, DB_USER, DB_PASSWORD);

    // エラー発生時に「PDOException」という例外を投げる設定に変更
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL文の作成
    $sql = 'INSERT INTO posts (title, content, category_id, created) values ("握手会のご報告", "先日、握手会を行いました。", 3, now())'; // now() ・・・ SQLの現在の日時を取得する関数

    // SQLを実行
    // $dbh->query($sql);

    // データベースとの接続を終了
    $dbh = null;

  } catch (PDOException $e) {
    //　例外発生時の処理
    echo 'エラー' . h($e->getMessage());
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
