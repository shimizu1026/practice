<?php
  // 配列の中に連想配列
  $posts = array(
    array(
      'title' => 'はじめてのブログ',
      'date' => '2018.03.03',
      'author' => '柴田',
      'content' => 'はじめまして。これからブログを頑張っていきます。'
    ),
    array(
      'title' => '２回目の投稿です。',
      'date' => '2018.03.04',
      'author' => '柴田',
      'content' => 'こんにちは、2回目のブログです。'
    ),
    array(
      'title' => 'ブログ閉鎖します。',
      'date' => '2018.03.05',
      'author' => '柴田',
      'content' => 'こんにちは、今日でブログを閉鎖することにしました。'
    )
  );
?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>多次元配列</title>
</head>
<body>
  <h1>記事一覧</h1>
  <?php 
    foreach($posts as $post) {
  ?>

  <h2><?php echo $post['title']; ?></h2>
  <ul>
    <li>公開日： <?php echo $post['date']; ?></li>
    <li>著者： <?php echo $post['author']; ?></li>
  </ul>
  <p>
    <?php echo $post['content']; ?>
  </p>

  <?php
    }
  ?>
</body>
</html>