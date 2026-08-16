<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Sessionの利用</title>
</head>
<body>
  <h1>Sessionの利用</h1>

  <form action="receive.php" method="post">
    <dl>
      <dt><label for="name">ユーザー名</label></dt>
      <dd>
        <input type="text" name="name" id="name">
      </dd>
      <dt><label for="password">パスワード</label></dt>
      <dd>
        <input type="password" name="password" id="password">
      </dd>
    </dl>
    <p><input type="submit" value="ログイン"></p>
  </form>
</body>
</html>