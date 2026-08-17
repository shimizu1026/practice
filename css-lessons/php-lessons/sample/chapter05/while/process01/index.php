<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>while文</title>
</head>
<body>
<h1>while文</h1>  
<?php
  $i = 1; // ループ用変数の初期化
  while ( $i <= 10 ) {
    // $i が 10 以下の間繰り返す
    echo $i .'回目のループ<br>';
    $i = $i +1; // ループ用変数の加算
  }
?>
</body>
</html>