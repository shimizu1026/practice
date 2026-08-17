<?php
  $result = $_POST['price'] * $_POST['tax'];
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>練習問題3</title>
</head>
<body>
  <h1>合計</h1>
  <p>&yen; <?php echo htmlspecialchars( $result, ENT_QUOTES, 'utf-8' ); ?></p>
  <p><a href="./">入力フォームに戻る</a></p>
</body>
</html>