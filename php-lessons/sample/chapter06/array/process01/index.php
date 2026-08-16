<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>配列</title>
</head>
<body>
  <h1>配列</h1>
  <?php
    // 配列の作成
    $members = array(
      '指原', '山本', '柏木', '横山'
    );

    // 配列の値にアクセス
    echo '<p>' . $members[1] . '</p>'; // 山本
  ?>
</body>
</html>