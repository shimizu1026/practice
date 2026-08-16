<?php
  // 配列の作成
  $prefs = array(
    '北海道', '青森県', '岩手県', '宮城県', '秋田県',
    '山形県', '福島県', '茨城県', '栃木県', '群馬県',
    '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県',
    '富山県', '石川県', '福井県', '山梨県', '長野県',
    '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県',
    '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
    '鳥取県', '島根県', '岡山県', '広島県', '山口県',
    '徳島県', '香川県', '愛媛県', '高知県', '福岡県',
    '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県',
    '鹿児島県', '沖縄県'
  );
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>foreach文1</title>
</head>
<body>
  <h1>foreach文1</h1>

  <form action="" method="post">
    <dl>
      <dt><label for="pref">都道府県</label></dt>
      <dd>
        <select id="pref" name="pref">
        <?php
          foreach ($prefs as $pref) {
            // $prefs の要素の数だけ繰り返す
            echo '<option value="'. $pref .'">'. $pref .'</option>';
          }
        ?>
        </select>
      </dd>
    </dl>
    <p><input type="submit" value="送信"></p>
  </form>
</body>
</html>