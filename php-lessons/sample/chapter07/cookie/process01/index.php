<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Cookieの利用</title>
</head>
<body>
  <h1>Cookieの利用</h1>

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
    <p><label><input type="checkbox" name="save" value="on" checked> ユーザー名を保存する</label></p>
    <p><input type="submit" value="ログイン"></p>
  </form>
</body>
</html>