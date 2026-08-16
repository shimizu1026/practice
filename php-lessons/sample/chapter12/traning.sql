-- 「users」テーブルの全レコードを「name」と「email」フィールドのみ抽出
select name, email from users;

-- 「users」テーブルの「created」が 2017年5月未満 でかつ「modified」が 2017年5月以降 のレコードを「name」と「created」と「modified」フィールドのみ抽出
select name, created, modified from users where created < '2017-05-01' and modified >= '2017-05-01';

-- 「users」テーブルの「modified」が 2017年7月 のレコードを全フィールド抽出
select * from users where modified between '2017-07-01' and '2017-07-31';

-- 「users」テーブルの「email」の トップレベルドメインが3文字（.com や .net など）のレコードを全フィールド抽出
select * from users where email like '%.___';

-- 「posts」テーブルの「content」に「こんにちは」という文字列を含むレコードを、「created」が 新しい順に3件、「title」、「content」、「created」 フィールドのみ抽出
select title, content, created
  from posts
  where content like '%こんにちは%'
  order by created desc
  limit 3;