<?php
  // セッションの開始
  session_start();

  // XSS対策
  function h($s) {
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
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
  <title>お問い合わせフォーム</title>
  <link rel="stylesheet" href="../../../asset/css/common.css">
</head>
<body>
  <header class="l-header">
    <div class="l-wrapper">
      <h1 class="l-header-logo">
        <a href="./" class="logo-primary">
          PHP <span class="logo-caption">お問い合わせフォーム</span>
        </a>
      </h1>
    </div>
  </header>
  <main class="l-main">
    <div class="l-wrapper">
      <section class="l-section">
        <h2>お問い合わせフォーム</h2>
        <!-- ここまではテンプレート -->

        <form action="set.php" method="post">
          <dl class="define-table">
            <dt><label for="name">お名前</label></dt>
            <dd>
              <input type="text" name="name" id="name" class="textfield" value="<?php if (isset($_SESSION['post']['name'])) { echo h($_SESSION['post']['name']); } ?>">
              <?php if ( isset($_SESSION['error']['name']) ) : ?>
              <p class="u-text-red"><?php echo h($_SESSION['error']['name']); ?></p>
              <?php endif; ?>
            </dd>
            <dt><label for="email">メールアドレス</label></dt>
            <dd>
              <input type="text" name="email" id="email" class="textfield" value="<?php if (isset($_SESSION['post']['email'])) { echo h($_SESSION['post']['email']); } ?>">
              <?php if ( isset($_SESSION['error']['email']) ) : ?>
              <p class="u-text-red"><?php echo h($_SESSION['error']['email']); ?></p>
              <?php endif; ?>
            </dd>
            <dt><label for="message">お問い合わせ内容</label></dt>
            <dd>
              <textarea name="message" id="message" class="textfield" rows="8" cols="50"><?php if (isset($_SESSION['post']['message'])) { echo h($_SESSION['post']['message']); } ?></textarea>
              <?php if ( isset($_SESSION['error']['message']) ) : ?>
              <p class="u-text-red"><?php echo h($_SESSION['error']['message']); ?></p>
              <?php endif; ?>
            </dd>
          </dl>
          <p><input type="hidden" name="token" value="<?php echo h($_SESSION['token']); ?>"></p>
          <p><input type="submit" class="button button-primary" value="入力確認へ"></p>
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
