<?php
  // 職種の配列の作成
  $jobs = array(
    'Webディレクター', 'Webデザイナー', 'Webプログラマー', 'マークアップエンジニア',
  );

  // スキルの配列
  $skills = array(
    'HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'Photoshop', 'Illustrator', 'Dreamweaver'
  );
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>練習問題6</title>
</head>
<body>
  <h1>求人フォーム</h1>

  <form action="receive.php" method="post">
    <dl>
      <dt><label for="job">希望職種</label></dt>
      <dd>
        <select id="job" name="job">
        <?php foreach ($jobs as $job) : ?>
          <option value="<?php echo $job; ?>"><?php echo $job; ?></option>
        <?php endforeach; ?>
        </select>
      </dd>
      <dt>あなたがお持ちのスキル<small>（複数選択可）</small></dt>
      <dd>
        <ul>
        <?php foreach ($skills as $skill) : ?>
          <li>
            <label>
              <input type="checkbox" name="skill[]" value="<?php echo $skill; ?>">
              <?php echo $skill; ?>
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