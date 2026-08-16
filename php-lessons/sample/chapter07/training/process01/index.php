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
</head>
<body>
  <h1>アクセスカウンタ</h1>
  <p>あなたはこのページを <?php echo htmlspecialchars($counter, ENT_QUOTES, 'UTF-8'); ?>回見ています。</p>

  <p><a href="reset.php">カウンターのリセット</a></p>
</body>
</html>