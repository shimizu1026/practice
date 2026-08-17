<?php
  // 変数の代入
  $dan = 2;
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>練習問題2</title>
</head>
<body>
  <h1>九九</h1>
  <h2><?php echo $dan; ?>の段</h2>
  <ul>
    <li><?php echo $dan . '× 1 =' . $dan * 1; ?></li>
    <li><?php echo $dan . '× 2 =' . $dan * 2; ?></li>
    <li><?php echo $dan . '× 3 =' . $dan * 3; ?></li>
    <li><?php echo $dan . '× 4 =' . $dan * 4; ?></li>
    <li><?php echo $dan . '× 5 =' . $dan * 5; ?></li>
    <li><?php echo $dan . '× 6 =' . $dan * 6; ?></li>
    <li><?php echo $dan . '× 7 =' . $dan * 7; ?></li>
    <li><?php echo $dan . '× 8 =' . $dan * 8; ?></li>
    <li><?php echo $dan . '× 9 =' . $dan * 9; ?></li>
  </ul>
</body>
</html>