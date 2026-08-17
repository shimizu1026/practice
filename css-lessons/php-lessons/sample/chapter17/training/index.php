<?php
  // データベースの定数
  define('DB_NAME', 'mini_cms_app');
  define('DB_USER', 'root');
  define('DB_PASSWORD', ''); // パスワード （MAMPは「root」）
  define('DSN', 'mysql:host=localhost;dbname='. DB_NAME . ';charset=utf8');

  // XSS 対策
  function h($s) {
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
  }

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
  <title>カテゴリ一覧</title>
</head>
<body>
  <h1>カテゴリ一覧</h1>

  <table border="1">
    <thead>
      <th>ID</th>
      <th>カテゴリ名</th>
    </thead>
    <?php foreach($result as $row) : ?>
    <tr>
      <td><?php echo h($row['id']) ?></td>
      <td><?php echo h($row['category_name']) ?></td>
    </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>
