<?php
  // エラーメッセージを格納する変数を初期化
  $error = '';

  // お名前の入力チェック
  if ( $_POST['your_name'] == '' ) {
    $error .= '<li>お名前を入力して下さい。</li>';
  }

  // メールアドレスの入力チェック
  if ( $_POST['your_email'] == '' ) {
    $error .= '<li>メールアドレスを入力して下さい。</li>';
  }

  if ( $_POST['your_email'] != '' && !filter_var($_POST['your_email'], FILTER_VALIDATE_EMAIL) ) {
    $error .= '<li>メールアドレスの形式が正しくありません。</li>';
  }

  // お問い合わせ内容の入力チェック
  if ( $_POST['inquiry'] == '' ) {
    $error .= '<li>お問い合わせ内容を入力して下さい。</li>';
  }

?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>練習問題4</title>
  <link rel="stylesheet" href="../../../asset/css/common.css">
</head>
<body>
  <header class="l-header">
    <div class="l-wrapper">
      <h1 class="l-header-logo">
        <a href="./" class="logo-primary">
          PHP <span class="logo-caption">練習問題4</span>
        </a>
      </h1>
    </div>
  </header>
  <main class="l-main">
    <div class="l-wrapper">
      <section class="l-section">
        <h2>入力確認</h2>
        <!-- ここまではテンプレート -->

        <?php 
          if ( !empty($error) ) {
            echo '<ul class="u-text-red">' . $error . '</ul>';
          } else {
        ?>

        <dl class="define-table">
          <dt>お名前</dt>
          <dd>
            <?php echo htmlspecialchars($_POST['your_name'], ENT_QUOTES, 'UTF-8'); ?>
          </dd>
          <dt>メールアドレス</dt>
          <dd>
            <?php echo htmlspecialchars($_POST['your_email'], ENT_QUOTES, 'UTF-8'); ?>
          </dd>
          <dt>お問い合わせ内容</dt>
          <dd>
            <?php echo htmlspecialchars($_POST['inquiry'], ENT_QUOTES, 'UTF-8'); ?>
          </dd>
        </dl>

        <?php
          }
        ?>
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