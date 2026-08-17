<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>チェックボックスの受信</title>
</head>
<body>
  <h1>チェックボックスの受信</h1>
  <?php if ( isset($_POST['soft']) ) : ?>
  <ul>
    <?php foreach( $_POST['soft'] as $soft ) : ?>
      <li>
        <?php echo htmlspecialchars($soft, ENT_QUOTES, 'UTF-8'); ?>
      </li>
    <?php endforeach; ?>
  </ul>
  <?php endif; ?>
  <p><a href="./">入力フォームに戻る</a></p>
</body>
</html>