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

    // ブラケット構文による値の代入
    $members[1] = 'まゆゆ'; // $members の 1号室に値を代入
    $members[] = '柴田'; //  $members の 末尾に値を代入

    // 反復を活用して全ての値を取り出す
    for($i = 0; $i < count( $members); $i++) {
      echo '<p>' . $members[$i] . '</p>';
    }
  ?>
</body>
</html>