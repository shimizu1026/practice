<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>練習問題6</title>
  <link rel="stylesheet" href="../../../asset/css/common.css">
</head>
<body>
  <header class="l-header">
    <div class="l-wrapper">
      <h1 class="l-header-logo">
        <a href="./" class="logo-primary">
          PHP <span class="logo-caption">練習問題6</span>
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
          <dt>希望職種</dt>
          <dd>
            <?php echo htmlspecialchars($_POST['job'], ENT_QUOTES, 'utf-8'); ?>
          </dd>
          <dt>あなたがお持ちのスキル</dt>
          <dd>
            <?php if (isset($_POST['skill'])) : ?>
            <ul>
              <?php foreach( $_POST['skill'] as $skill ) : ?>
                <li>
                  <?php echo htmlspecialchars($skill, ENT_QUOTES, 'utf-8'); ?>
                </li>
              <?php endforeach; ?>
            </ul>
            <?php endif; ?>
          </dd>
        </dl>


        <p><a href="./" class="button button-primary">入力フォームに戻る</a></p>
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