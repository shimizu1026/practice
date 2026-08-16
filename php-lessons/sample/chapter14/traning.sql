-- 「posts」テーブルと「users」テーブルを「user_id」をキーとして内部結合し
-- 「title」フィールドと「name」フィールドのレコードを抽出
select p.title, u.name
  from posts as p join users as u
  on p.user_id = u.id;

-- 「posts」テーブルと「users」テーブルを「user_id」をキーとして内部結合し
-- 「name」フィールドと「user_id」ごとのレコード数を「total」というフィールド名で抽出
select u.name, count(*) as total
  from posts as p join users as u
  on p.user_id = u.id
  group by p.user_id;

-- 「posts」テーブルと「users」テーブルを「user_id」をキーとして内部結合し
-- 「user_id」が「3」または、「4」のレコードの
-- 「id（postsテーブル）」、「title」、「content」、「name」フィールドを
-- 「created」が新しい順に5件抽出
select p.id, p.title, p.content, u.name
  from posts as p join users as u
  on p.user_id = u.id
  where p.user_id in(3,4)
  order by p.created desc
  limit 5;

-- 「view2」というビューを作成し、
-- 「posts」テーブルと「users」テーブルを「user_id」をキーとして内部結合し
-- 「posts」テーブルの全フィールドと「name」、「email」フィールドを抽出する条件を保存
create view view2
  as 
    select p.*, u.name, u.email
      from posts as p join users as u
      on p.user_id = u.id;

-- 「view2」というビューを「created」の新しい順で全てのレコードを表示
select * from view2 order by created desc;

-- 「view2」というビューを削除
drop view view2;