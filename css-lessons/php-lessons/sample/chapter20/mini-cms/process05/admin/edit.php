<?php
  // ファイルの読み込み
  require_once('../inc/config.php');
  require_once('../inc/functions.php');

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
    $sql = 'SELECT p.*, c.category_name FROM posts AS p JOIN categories AS c ON p.category_id = c.id WHERE p.id = ?';

    // ステートメント用意
    $stmt = $dbh->prepare($sql);

    // プレースホルダーに値をガッチャンコ
    $stmt->bindValue(1, (int)$_GET['id'] , PDO::PARAM_INT);

    // ステートメントを実行
    $stmt->execute();

    // 実行結果を連想配列として取得
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    // print_r($result);

    // SQL文の作成 カテゴリの全レコードを抽出
    $sql = 'SELECT * FROM categories';

    // クエリの実行
    $stmt = $dbh->query($sql);

    // 実行結果を全件連想配列として取得
    $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

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
  <title>記事の編集</title>
</head>
<body>
  <h1>記事の編集</h1>
  <form action="update.php" method="post">
    <dl>
      <dt><label for="title">記事のタイトル</label></dt>
      <dd>
        <input type="text" id="title" name="title" value="<?php echo h($result['title']); ?>">
      </dd>
      <dt><label for="category_id">カテゴリー</label></dt>
      <dd>
        <select name="category_id" id="category_id">
          <?php foreach($categories as $category) : ?>
          <?php
            $selected = '';
            // ループで出力するカテゴリと、データベースから取得したカテゴリが一致するかチェック
            if ($category['id'] == $result['category_id']) {
              // 一致した場合
              $selected = ' selected';
            }
          ?>
          <option value="<?php echo h($category['id']); ?>"<?php echo h($selected); ?>><?php echo h($category['category_name']); ?></option>
          <?php endforeach; ?>
        </select>
      </dd>
      <dt><label for="content">記事の内容</label></dt>
      <dd>
        <textarea name="content" id="content" cols="30" rows="10"><?php echo h($result['content']); ?></textarea>
      </dd>
    </dl>
    <p><input type="hidden" name="id" value="<?php echo h($result['id']); ?>"></p>
    <p><input type="submit" value="変更"></p>
  </form>
</body>
</html>
