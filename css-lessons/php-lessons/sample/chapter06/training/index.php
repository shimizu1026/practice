<?php
  // 職種の配列
  $jobs = array(
    'Webディレクター', 'Webデザイナー', 'Webプログラマー', 'マークアップエンジニア'
  );
  // スキルの配列
  $skills = array(
    'HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'Photoshop', 'Illustrator', 'Dreamweaver'
  );
?>
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
        <h2>求人フォーム</h2>
        <!-- ここまではテンプレート -->

        <form action="receive.php" method="post">
          <dl class="define-table">
            <dt><label for="job">希望職種</label></dt>
            <dd>
              <select id="job" name="job">
              <?php foreach ($jobs as $job) : ?>
                <option value="<?php echo $job; ?>"><?php echo $job; ?></option>
              <?php endforeach; ?>
              </select>
            </dd>
            <dt>あなたがお持ちのスキル<small>（複数選択可）</small></dt>
            <dd>
              <ul>
              <?php foreach ($skills as $skill) : ?>
                <li>
                  <label>
                    <input type="checkbox" name="skill[]" value="<?php echo $skill; ?>">
                    <?php echo $skill; ?>
                  </label>
                </li>
              <?php endforeach; ?>
              </ul>
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