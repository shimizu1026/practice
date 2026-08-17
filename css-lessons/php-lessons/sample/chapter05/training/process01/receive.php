<?php
  date_default_timezone_set('Asia/Tokyo');
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>練習問題5</title>
</head>
<body>
  <h1>入力確認</h1>

  <dl>
    <dt>希望日</dt>
    <dd>
      <?php echo date('Y年 n月'); ?>
      <?php echo htmlspecialchars($_POST['date'], ENT_QUOTES, 'utf-8'); ?>日
    </dd>
  </dl>
  <p><a href="./">予約フォームに戻る</a></p>
</body>
</html>