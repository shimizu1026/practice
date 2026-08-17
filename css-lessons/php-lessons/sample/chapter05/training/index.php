<?php
  date_default_timezone_set('Asia/Tokyo');
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>練習問題5</title>
  <link rel="stylesheet" href="../../../asset/css/common.css">
</head>
<body>
  <header class="l-header">
    <div class="l-wrapper">
      <h1 class="l-header-logo">
        <a href="./" class="logo-primary">
          PHP <span class="logo-caption">練習問題5</span>
        </a>
      </h1>
    </div>
  </header>
  <main class="l-main">
    <div class="l-wrapper">
      <section class="l-section">
        <h2><?php echo date('Y年 n月'); ?>の予約フォーム</h2>
        <!-- ここまではテンプレート -->

        <form action="receive.php" method="post">
          <dl class="define-table">
            <dt><label for="date">希望日</label></dt>
            <dd>
              <?php echo date('Y年 n月'); ?>
              <select id="date" name="date">
              <?php 
                for ($i = 1; $i <= date('t'); $i++) {
                  echo '<option value="'. $i .'">'. $i .'日</option>';
                }
              ?>
              </select>
            </dd>
          </dl>
          <p><input type="submit" class="button button-primary" value="送信"></p>
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