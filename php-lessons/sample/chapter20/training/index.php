<?php
  // ファイルの読み込み
  require_once('config.php');
  require_once('functions.php');

  try {
    // データベースへ接続
    $dbh = new PDO(DSN, DB_USER, DB_PASSWORD);

    // エラー発生時に「PDOException」という例外を投げる設定に変更
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL文の作成
    $sql = 'SELECT * FROM categories';

    // SQLを実行
    $stmt = $dbh->query($sql);

    // 実行結果を連想配列として取得
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
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
  <title>カテゴリの管理</title>
</head>
<body>
  <h1>カテゴリの管理</h1>

  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>カテゴリ名</th>
        <th>編集</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach($result as $row) : ?>
      <tr>
        <td><?php echo h($row['id']); ?></td>
        <td><?php echo h($row['category_name']); ?></td>
        <td><a href="edit.php?id=<?php echo h($row['id']); ?>">編集</a></td>
      </tr>
      <?php endforeach; ?>
    </tbody>
  </table>
</body>
</html>
