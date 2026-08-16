<?php
  // ファイルの読み込み
  require_once('inc/config.php');
  require_once('inc/functions.php');

  // 現在のページを取得
  $page = 1; // 初期値
  if ( isset($_GET['page']) && !empty($_GET['page']) ) {
    $page = $_GET['page'];
  }

  // カテゴリを取得
  $current_category = 0;
  if ( isset($_GET['category']) && !empty($_GET['category']) ) {
    $current_category = $_GET['category'];
  }

  // 1ページ辺りの表示件数
  $limit = 5;

  try {
    // データベースへ接続
    $dbh = new PDO(DSN, DB_USER, DB_PASSWORD);

    // エラー発生時に「PDOException」という例外を投げる設定に変更
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ( $current_category === 0 ) {
      // 全カテゴリ表示時

      // SQL文の作成 レコード数を抽出
      $sql = 'SELECT count(*) AS total FROM posts';

      // SQLを実行
      $stmt = $dbh->query($sql);

    } else {
      // 特定のカテゴリのみ表示時

      // SQL文の作成 レコード数を抽出
      $sql = 'SELECT count(*) AS total FROM posts WHERE category_id = ?';

      // ステートメント用意
      $stmt = $dbh->prepare($sql);

      // プレースホルダーに値をガッチャンコ
      $stmt->bindValue(1, (int)$current_category , PDO::PARAM_INT);

      // ステートメントを実行
      $stmt->execute();
    }

    // 実行結果を連想配列として取得
    $count = $stmt->fetch(PDO::FETCH_ASSOC);

    // トータルが 0 にならない対策
    $total = max($count['total'], 1);

    // トータルページ数
    $total = ceil($total / $limit);


    // $page が存在しないページ番号にならない対策
    $page = max($page, 1);  // 1より小さくならない
    $page = min($page, $total);  // トータルページ数より大きくならない

    // 取得する投稿の開始位置
    $start = ($page - 1) * $limit;


    // SQL文の作成 カテゴリ
    $sql = 'SELECT * FROM categories';

    // SQLを実行
    $stmt = $dbh->query($sql);

    // 実行結果を連想配列として取得
    $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ( $current_category === 0 ) {
      // 全てのカテゴリ表示時

      // SQL文の作成
      $sql = 'SELECT p.*, c.category_name FROM posts AS p JOIN categories AS c ON p.category_id = c.id ORDER BY created DESC LIMIT ?, ?';

      // ステートメント用意
      $stmt = $dbh->prepare($sql);

      // プレースホルダーに値をガッチャンコ
      $stmt->bindValue(1, (int)$start , PDO::PARAM_INT);
      $stmt->bindValue(2, (int)$limit , PDO::PARAM_INT);
    } else {
      // カテゴリが絞り込まれている時

      // SQL文の作成
      $sql = 'SELECT p.*, c.category_name FROM posts AS p JOIN categories AS c ON p.category_id = c.id WHERE p.category_id = ? ORDER BY created DESC LIMIT ?, ?';

      // ステートメント用意
      $stmt = $dbh->prepare($sql);

      // プレースホルダーに値をガッチャンコ
      $stmt->bindValue(1, (int)$current_category , PDO::PARAM_INT);
      $stmt->bindValue(2, (int)$start , PDO::PARAM_INT);
      $stmt->bindValue(3, (int)$limit , PDO::PARAM_INT);
    }

    // ステートメントを実行
    $stmt->execute();

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
  <title>新着記事一覧</title>
</head>
<body>
  <h1>新着情報</h1>
  <p>全<?php echo h($count['total']) ?>件 <small>（<?php echo h($page) ?> / <?php echo h($total); ?>ページ目）</small></p>

  <ul>
    <li><a href="index.php?category=0">全て</a></li>
    <?php foreach( $categories as $category ) : ?>
    <li><a href="index.php?category=<?php echo $category['id']; ?>"><?php echo h($category['category_name']); ?></a></li>
    <?php endforeach; ?>
  </ul>

  <dl>
    <?php foreach($result as $row) : ?>
    <dt><time datetime="<?php echo h($row['created']); ?>"><?php echo h(date('Y年m月d日', strtotime($row['created']))); ?></time> 【<?php echo h($row['category_name']); ?>】</dt>
    <dd>
      <a href="detail.php?id=<?php echo h($row['id']); ?>">
        <?php echo h($row['title']); ?>
      </a>
    </dd>
    <?php endforeach; ?>
  </dl>

  <nav>
    <h2>ページナビゲーション</h2>
    <ul>
      <?php if ( $page > 1 ) : ?>
      <li><a href="index.php?page=<?php echo h( $page - 1 ); ?>&category=<?php echo h($current_category); ?>">前のページへ</a></li>
      <?php endif; ?>
      <?php if ( $page < $total ) : ?>
      <li><a href="index.php?page=<?php echo h( $page + 1 ); ?>&category=<?php echo h($current_category); ?>">次のページへ</a></li>
      <?php endif; ?>
    </ul>
  </nav>
</body>
</html>
