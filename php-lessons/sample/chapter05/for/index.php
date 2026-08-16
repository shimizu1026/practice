<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>for文</title>
</head>
<body>
<h1>for文</h1>  
<?php
  for ( $i = 1; $i <= 10; $i++ ) {
    // $i が 10 以下の間繰り返す
    echo $i .'回目のループ<br>';
  }
?>
</body>
</html>