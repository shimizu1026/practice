<?php
  // 変数に値を代入
  $html = '<ul>';

  // 変数に右辺の文字列を連結して代入
  $html .= '<li>リスト1</li>';
  $html .= '<li>リスト2</li>';
  $html .= '<li>リスト3</li>';
  $html .= '</ul>';
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>代入演算子</title>
</head>
<body>
  <h1>代入演算子</h1>
  <?php echo $html; ?>
</body>
</html>