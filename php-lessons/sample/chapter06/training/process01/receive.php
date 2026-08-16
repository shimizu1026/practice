<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>練習問題6</title>
</head>
<body>
  <h1>入力確認</h1>

  <dl>
    <dt>希望職種</dt>
    <dd>
      <?php echo htmlspecialchars($_POST['job'], ENT_QUOTES, 'utf-8'); ?>
    </dd>
    <dt>あなたがお持ちのスキル</dt>
    <dd>
      <?php if (isset($_POST['skill'])) : ?>
      <ul>
        <?php foreach( $_POST['skill'] as $skill ) : ?>
          <li>
            <?php echo htmlspecialchars($skill, ENT_QUOTES, 'utf-8'); ?>
          </li>
        <?php endforeach; ?>
      </ul>
      <?php endif; ?>
    </dd>
  </dl>

  <p><a href="./">入力フォームに戻る</a></p>
</body>
</html>