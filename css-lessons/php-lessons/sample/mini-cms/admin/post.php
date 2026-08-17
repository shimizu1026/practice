<?php
  // セッションの開始
  session_start();

  // ファイルの読み込み
  require_once('../inc/config.php');
  require_once('../inc/functions.php');

  // CSRF対策 ・・・ トークンの生成
  set_token();

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

  // ページタイトル
  $page_title = '投稿フォーム';

  // ヘッダーの読み込み
  require_once('../inc/header.php');
?>
  <main class="l-main">
    <div class="l-wrapper">
      <section class="l-section">
        <h2><?php echo h($page_title); ?></h2>
        <!-- ここまではテンプレート -->

        <p><a href="./">一覧へ戻る</a></p>
        <form action="add.php" method="post" enctype="multipart/form-data">
          <dl class="define-table">
            <dt><label for="title">記事のタイトル</label></dt>
            <dd>
              <input type="text" id="title" name="title" class="textfield">
            </dd>
            <dt><label for="category_id">カテゴリー</label></dt>
            <dd>
              <select name="category_id" id="category_id">
                <?php foreach($result as $row) : ?>
                <option value="<?php echo h($row['id']); ?>"><?php echo h($row['category_name']); ?></option>
                <?php endforeach; ?>
              </select>
            </dd>
            <dt><label for="content">記事の内容</label></dt>
            <dd>
              <textarea name="content" id="content" cols="30" rows="10" class="textfield"></textarea>
            </dd>
            <dt><label for="post_image">画像</label></dt>
            <dd>
              <input type="file" id="post_image" name="post_image">
            </dd>
          </dl>
          <p><input type="hidden" name="token" value="<?php echo h($_SESSION['token']); ?>"></p>

          <p><input type="submit" value="投稿" class="button button-primary"></p>
        </form>

        <!-- ここからはテンプレート -->
      </section>
      <!-- /.l-section -->
    </div>
    <!-- /.l-wrapper -->
  </main>
<?php require_once('../inc/footer.php'); ?>
