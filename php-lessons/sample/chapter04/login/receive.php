<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>論理演算子を使ったログインチェック</title>
</head>
<body>
<?php
  // 今回はログイン用のメールアドレスとパスワードを変数で管理
  $email = 'dummy@dummy.com';
  $password = 'dummy';

  // メールアドレスとパスワードどちらも合っているかをチェック
  if ( $_POST['your_email'] == $email && $_POST['your_password'] == $password ) {
    // $_POST['your_email'] が $email と等しい かつ
    // $_POST['your_password'] が $password と等しい時の処理
    echo '<p>ログイン成功</p>';
  } else {
    echo '<p>メールアドレスとパスワードが一致しません</p>';
  }
?>
</body>
</html>