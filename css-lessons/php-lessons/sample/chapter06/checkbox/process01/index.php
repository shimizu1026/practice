<?php
  // 配列の作成
  $softs = array(
    'Photoshop', 'Illustrator', 'Fireworks', 'XD',
  );
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>チェックボックスの送信</title>
</head>
<body>
  <h1>チェックボックスの送信</h1>

  <form action="receive.php" method="post">
    <dl>
      <dt>お好きなソフトを選択して下さい。<small>（複数選択可）</small></dt>
      <dd>
        <ul>
        <?php foreach ($softs as $soft) : ?>
          <li>
            <label>
              <input type="checkbox" name="soft[]" value="<?php echo $soft; ?>">
              <?php echo $soft; ?>
            </label>
          </li>
        <?php endforeach; ?>
        </ul>
      </dd>
    </dl>
    <p><input type="submit" value="送信"></p>
  </form>
</body>
</html>