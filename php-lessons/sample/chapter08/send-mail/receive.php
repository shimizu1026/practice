<?php
  // 日本語の設定
  mb_language('ja');
  mb_internal_encoding('UTF-8');

  // メールアドレスが空なら、入力フォームにリダイレクト
  if ( $_POST['email'] == '' ) {
      header('Location: ./');
      exit();
  }

  // 値を変数に格納
  $to = $_POST['email'];
  $subject = 'PHPからメール送信テスト';
  $message = 'これはPHPから自動送信されたメールです。';
  $from = mb_encode_mimeheader('ダミー'). '<noreplay@dummy.com>';

  // メールの送信
  $resulut = mb_send_mail($to, $subject, $message, 'From: '. $from);
  if ($resulut) {
    // 送信成功
    $msg = '送信成功';
  } else {
    // 送信失敗
    $msg = '送信失敗';
  }
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>メールの送信</title>
</head>
<body>
  <h1>メールの送信</h1>

  <p><?php echo htmlspecialchars($msg, ENT_QUOTES, 'UTF-8'); ?></p>
  <p><a href="./">入力フォームに戻る</a></p>
</body>
</html>