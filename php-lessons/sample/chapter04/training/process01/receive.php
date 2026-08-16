<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>練習問題4</title>
</head>
<body>
  <h1>入力確認</h1>
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

    // エラーの有無を判別
    if ( !empty($error) ) {
      echo '<ul>' . $error . '</ul>';
    } else {
  ?>

  <dl>
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
  <p><a href="./">入力フォームに戻る</a></p>
</body>
</html>