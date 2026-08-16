-- テーブルの和結合
-- 「posts」テーブルに「new_posts」テーブルを和結合
select * from posts union select * from new_posts;

-- 「posts」テーブルに「new_posts」テーブルを和結合（重複も表示）
select * from posts union all select * from new_posts;

-- テーブルの内部結合
-- 「posts」テーブルの「id」、「title」、「content」、「user_id」と
-- 「users」テーブルの「name」フィールドのキーが一致するレコードを抽出
select posts.id, posts.title, posts.content, posts.user_id, users.name
  from posts join users
  on posts.user_id = users.id;

-- 「posts」テーブルの「id」、「title」、「content」と
-- 「users」テーブルの「name」フィールドのキーが一致するレコードを
-- 「posts」テーブルの「id」の降順で抽出
select posts.id, posts.title, posts.content, users.name
  from posts join users
  on posts.user_id = users.id
  order by posts.id desc;

-- 「new_posts」テーブルの「id」、「title」、「content」、「created」と
-- 「users」テーブルの「name」フィールドのキーが一致するレコードを
-- 「new_posts」テーブルの「created」が新しい順に抽出
select new_posts.id, new_posts.title, new_posts.content, new_posts.created, users.name
  from new_posts join users
  on new_posts.user_id = users.id
  order by new_posts.created desc;

-- 外部結合
-- 「new_posts」テーブルの「id」、「title」、「content」、「created」と
-- 「users」テーブルの「name」フィールドを「new_posts」テーブルは全レコード
-- 「new_posts」テーブルの「created」が新しい順に抽出
select new_posts.id, new_posts.title, new_posts.content, new_posts.created, users.name
  from new_posts left join users
  on new_posts.user_id = users.id
  order by new_posts.created desc;

-- 相関名を付ける
-- 「new_posts」テーブルの「id」、「title」、「content」、「created」と
-- 「users」テーブルの「name」フィールドを「new_posts」テーブルは全レコード
-- 「new_posts」テーブルの「created」が新しい順に抽出
select p.id, p.title, p.content, p.created, u.name
  from new_posts as p left join users as u
  on p.user_id = u.id
  order by p.created desc;