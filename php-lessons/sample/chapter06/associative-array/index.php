<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>連想配列</title>
</head>
<body>
  <?php
    // 配列の作成
    $post = array(
      'title' => 'はじめてのブログ',
      'date' => '2018.03.03',
      'author' => '柴田',
      'content' => 'はじめまして。これからブログを頑張っていきます。'
    );

    // ブラケット構文による値の代入
    $post['author'] = '山本'; // $post の author に値を代入
    $post['category'] = 'お知らせ'; // $post の category に値を代入
  ?>
 <h1><?php echo $post['title']; ?></h1>
 <ul>
   <li>公開日： <?php echo $post['date']; ?></li>
   <li>カテゴリー： <?php echo $post['category']; ?></li>
   <li>著者： <?php echo $post['author']; ?></li>
 </ul>
 <p>
   <?php echo $post['content']; ?>
 </p>
</body>
</html>