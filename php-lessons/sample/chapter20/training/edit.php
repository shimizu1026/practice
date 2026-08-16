<?php
  // セッションの開始
  session_start();

  // ファイルの読み込み
  require_once('config.php');
  require_once('functions.php');

  // GETパラメータのチェック
  if ( empty($_GET['id']) ) {
    // $_GET['id'] が 空 の場合
    header('Location: index.php');
    exit();
  }

  // CSRF対策 ・・・ トークンの生成
  set_token();

  try {
    // データベースへ接続
    $dbh = new PDO(DSN, DB_USER, DB_PASSWORD);

    // エラー発生時に「PDOException」という例外を投げる設定に変更
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL文の作成
    $sql = 'SELECT * FROM categories WHERE id = ?';

    // ステートメント用意
    $stmt = $dbh->prepare($sql);

    // プレースホルダーに値をガッチャンコ
    $stmt->bindValue(1, (int)$_GET['id'] , PDO::PARAM_INT);

    // ステートメントを実行
    $stmt->execute();

    // 実行結果を連想配列として取得
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    // print_r($result);

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
  <title>カテゴリの編集</title>
</head>
<body>
  <h1>カテゴリの編集</h1>
  <form action="update.php" method="post">
    <dl>
      <dt><label for="category_name">カテゴリ名</label></dt>
      <dd>
        <input type="text" id="category_name" name="category_name" value="<?php echo h($result['category_name']); ?>">
      </dd>
    </dl>
    <p><input type="hidden" name="id" value="<?php echo h($result['id']); ?>"></p>
    <p><input type="hidden" name="token" value="<?php echo h($_SESSION['token']); ?>"></p>
    <p><input type="submit" value="変更"></p>
  </form>
</body>
</html>
