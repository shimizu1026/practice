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
  <h1><?php echo date('Y年 n月'); ?>の予約フォーム</h1>

  <form action="receive.php" method="post">
    <dl>
      <dt><label for="date">希望日</label></dt>
      <dd>
        <?php echo date('Y年 n月'); ?>
        <select id="date" name="date">
        <?php 
          for ($i = 1; $i <= date('t'); $i++) {
            echo '<option value="'. $i .'">'. $i .'日</option>';
          }
        ?>
        </select>
      </dd>
    </dl>
    <p><input type="submit" value="送信"></p>
  </form>
</body>
</html>