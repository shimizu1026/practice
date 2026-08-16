<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>お問い合わせフォーム</title>
</head>
<body>
  <h1>お問い合わせフォーム</h1>

  <form action="set.php" method="post">
    <dl>
      <dt><label for="name">お名前</label></dt>
      <dd>
        <input type="text" name="name" id="name">
      </dd>
      <dt><label for="email">メールアドレス</label></dt>
      <dd>
        <input type="text" name="email" id="email">
      </dd>
      <dt><label for="message">お問い合わせ内容</label></dt>
      <dd>
        <textarea name="message" id="message" rows="8" cols="50"></textarea>
      </dd>
    </dl>
    <p><input type="submit" value="入力確認へ"></p>
  </form>
</body>
</html>