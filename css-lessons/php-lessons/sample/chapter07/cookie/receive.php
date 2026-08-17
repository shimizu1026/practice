<?php
  // クッキーの保存と削除
  if ( isset($_POST['save']) && $_POST['save'] == 'on' ) {
    // クッキーの name に $_POST['name'] の値を 14日間保存
    setcookie('name', $_POST['name'], time() + 60 * 60 * 24 * 14); // 14日間（60秒 * 60分 * 24時間 * 14日）
    $msg = 'ユーザ名を保存しました。';
  } else {
    // クッキーの name の 値を削除 ・・・ 有効期限を過去にする
    setcookie('name', '', time() - 3600);
    $msg = 'ユーザ名を保存しませんでした。';
  }
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Cookieの利用</title>
</head>
<body>
  <h1>Cookieの利用</h1>

  <p><?php echo $msg; ?></p>
  <p><a href="./">入力フォームに戻る</a></p>
</body>
</html>