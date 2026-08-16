<?php
  // ファイルの読み込み
  require_once('inc/config.php');
  require_once('inc/functions.php');

  // GETパラメータのチェック
  if ( empty($_GET['id']) ) {
    // $_GET['id'] が 空 の場合
    header('Location: index.php');
    exit();
  }

  try {
    // データベースへ接続
    $dbh = new PDO(DSN, DB_USER, DB_PASSWORD);

    // エラー発生時に「PDOException」という例外を投げる設定に変更
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL文の作成
    $sql = 'SELECT p.*, c.category_name FROM posts AS p JOIN categories AS c
  ON p.category_id = c.id WHERE p.id = '. $_GET['id'];

    // SQLを実行
    $stmt = $dbh->query($sql);

    // 実行結果を連想配列として取得
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    print_r($result);

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
  <title>[記事のタイトル]</title>
</head>
<body>
  <h1>[記事のタイトル]</h1>
  <ul>
    <li>公開日： [記事の公開日]</li>
    <li>カテゴリ： [記事のカテゴリ名]</li>
  </ul>
  <p>
    [記事の内容]
  </p>
  <p><a href="./">一覧に戻る</a></p>
</body>
</html>
