-- 集約関数
-- 「posts」テーブルの全レコード数を抽出
select count(*) from posts;

-- 演算結果のグループ化
-- 「posts」テーブルのレコード数を「user_id」ごとに抽出
select user_id, count(*) from posts group by user_id;

-- フィールドに別名を付ける
-- 「posts」テーブルのレコード数を「user_id」ごとに「total」というフィールド名で抽出
select user_id, count(*) as total from posts group by user_id;

-- 集約関数の結果に条件を付ける
-- 「posts」テーブルの「user_id」ごとのレコード数が「2」以上のレコードを抽出
select user_id, count(*) as total
  from posts
  group by user_id
  having total >= 2;

-- 文字列の関数
-- 「posts」テーブルの「content」の文字数を抽出
select content, char_length(content) as len from posts;

-- 「posts」テーブルの「content」の「1」文字目から「10」文字抽出
select title, substring(content, 1, 10) as content from posts;

-- サブクエリ（副問い合わせ）
-- 「posts」テーブルの「content」の文字数が、「content」の平均文字数以下のものを抽出
select content, char_length(content) as len
  from posts
  having len <= (select avg(char_length(content)) from posts);