<?php
// セッションの開始
session_start();

// カウンターの初期値
$counter = 0;
if ( isset($_SESSION['count']) ) {
  // セッションに データがあれば セッションのデータを代入
  $counter = $_SESSION['count'];
}

// カウンターのカウントアップ
 $counter++;

 // セッションに保存
 $_SESSION['count'] = $counter;

?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>練習問題7</title>
  <link rel="stylesheet" href="../../../asset/css/common.css">
</head>
<body>
  <header class="l-header">
    <div class="l-wrapper">
      <h1 class="l-header-logo">
        <a href="./" class="logo-primary">
          PHP <span class="logo-caption">練習問題7</span>
        </a>
      </h1>
    </div>
  </header>
  <main class="l-main">
    <div class="l-wrapper">
      <section class="l-section">
        <h2>アクセスカウンター</h2>
        <!-- ここまではテンプレート -->
          <p>あなたはこのページを <?php echo htmlspecialchars($counter, ENT_QUOTES, 'UTF-8'); ?>回見ています。</p>

          <p><a href="reset.php" class="button button-primary">カウンターのリセット</a></p>

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