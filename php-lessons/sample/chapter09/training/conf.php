<?php
// セッションの開始
session_start();

// XSS対策
function h($s) {
  return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}

// セッションが空ならリダイレクト
if ( empty( $_SESSION['post']) ) {
  header('Location: ./');
  exit();
}

// CSFF対策
if (!isset($_SESSION['token'])) {
    $_SESSION['token'] = bin2hex(openssl_random_pseudo_bytes(16));
}

?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>入力確認</title>
  <link rel="stylesheet" href="../../../asset/css/common.css">
</head>
<body>
  <header class="l-header">
    <div class="l-wrapper">
      <h1 class="l-header-logo">
        <a href="./" class="logo-primary">
          PHP <span class="logo-caption">入力確認</span>
        </a>
      </h1>
    </div>
  </header>
  <main class="l-main">
    <div class="l-wrapper">
      <section class="l-section">
        <h2>入力確認</h2>
        <!-- ここまではテンプレート -->

        <dl class="define-table">
          <dt>お名前</dt>
          <dd>
            <?php echo h($_SESSION['post']['name']); ?>
          </dd>
          <dt>メールアドレス</dt>
          <dd>
            <?php echo h($_SESSION['post']['email']); ?>
          </dd>
          <dt>お問い合わせ内容</dt>
          <dd>
            <?php echo nl2br( h($_SESSION['post']['message']), false); ?>
          </dd>
        </dl>
        <form action="send.php" method="post">
          <p><input type="hidden" name="token" value="<?php echo h($_SESSION['token']); ?>"></p>
          <ul class="inline-list">
            <li><a href="./" class="button button-primary">入力フォームへ</a></li>
            <li><input type="submit" class="button button-primary" value="送信"></li>
          </ul>
        </form>

        <!-- ここからはテンプレート -->
      </section>
      <!-- /.l-section -->
    </div>
    <!-- /.l-wrapper -->
  </main>
  <footer class="l-footer">
    <div class="l-wrapper">
      <p class="copyright"><small>&copy; 2016 Shibata Hironori</small></p>
    </div>
    <!-- /.l-wrapper -->
  </footer>
</body>
</html>
