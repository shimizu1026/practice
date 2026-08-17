<?php
  // セッションの開始
  session_start();

  // ファイルの読み込み
  require_once('config.php');
  require_once('functions.php');

  // CSRF対策 ・・・ トークンの生成
  set_token();
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>カテゴリを登録</title>
</head>
<body>
  <h1>カテゴリを登録</h1>

  <form action="add.php" method="post">
    <dl>
      <dt><label for="category_name">カテゴリ名</label></dt>
      <dd>
        <input type="text" id="category_name" name="category_name">
      </dd>
    </dl>
    <p><input type="hidden" name="token" value="<?php echo h($_SESSION['token']); ?>"></p>
    <p><input type="submit" value="カテゴリを登録"></p>
  </form>
</body>
</html>