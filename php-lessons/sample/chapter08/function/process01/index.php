<?php
  // 関数の登録
  function  area_of_triangle($base, $height) {
    // 関数として登録する処理
    $result = $base * $height / 2;
    echo $result;
  }
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>独自関数</title>
</head>
<body>
  <h1>独自関数</h1>
  <p>底辺が 6cm 、高さが 4cm の三角形の面積は、<?php area_of_triangle(6, 4); ?>cm<sup>2</sup>です。</p>
</body>
</html>