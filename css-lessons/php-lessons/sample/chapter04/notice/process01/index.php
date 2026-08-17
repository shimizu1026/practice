<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Noticeの対策</title>
</head>
<body>
  <h1>つぶやき</h1>
  <form action="" method="post">
    <dl>
      <dt><label for="msg">ひとこと</label></dt>
      <dd><input type="text" id="msg" name="msg" value="<?php echo htmlspecialchars($_POST['msg'], ENT_QUOTES, 'UTF-8'); ?>"></dd>
    </dl>
    <p><input type="submit" value="つぶやく"></p>
  </form>
</body>
</html>