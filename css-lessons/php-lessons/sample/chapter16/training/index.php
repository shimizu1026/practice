<?php
  // データベースの定数
  define('DB_NAME', 'mini_cms_app');
  define('DB_USER', 'root');
  define('DB_PASSWORD', ''); // パスワード （MAMPは「root」）
  define('DSN', 'mysql:host=localhost;dbname='. DB_NAME . ';charset=utf8');

  try {
    // データベースへ接続
    $dbh = new PDO(DSN, DB_USER, DB_PASSWORD);

    // エラー発生時に「PDOException」という例外を投げる設定に変更
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL文の作成
    $sql = 'DELETE FROM posts WHERE id = 4';

    // SQLの実行
    $dbh->query($sql);

    // データベースとの接続を終了
    $dbh = null;

  } catch (PDOException $e) {
    //　例外発生時の処理
    echo 'エラー' . htmlspecialchars($e->getMessage(), ENT_QUOTES, 'UTF-8');
    exit();
  }
?>
