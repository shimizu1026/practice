-- レコードの抽出
-- 「posts」テーブルの全レコードを全フィールド抽出
select * from posts;

-- 「posts」テーブルの全レコードを「title」と「content」フィールドのみ抽出
select title, content from posts;

-- 比較演算子を使った抽出
-- 「posts」テーブルの「created」が 2017年5月以降 のレコードを全フィールド抽出
select * from posts where created >= '2017-05-01';

-- 「posts」テーブルの「user_id」が「3」のレコードを「title」フィールドのみ抽出
select title from posts where user_id = 3;

-- 論理演算子を使った抽出
-- 「posts」テーブルの「created」が 2017年5月未満 か 2017年7月以降 のレコードを全フィールド抽出
select * from posts where created < '2017-05-01' or created >= '2017-07-01';

-- 「posts」テーブルの「user_id」が「3」または「4」でかつ「created」が 2017年7月以降 のレコードを全フィールド抽出
select * from posts where (user_id = 3 or user_id = 4) and created >= '2017-07-01';

-- その他の演算子を使った抽出
-- 「posts」テーブルの「created」が 2017年5月 のレコードを全フィールド抽出
select * from posts where created between '2017-05-01' and '2017-06-01';

-- 「posts」テーブルの「user_id」が「2」または「4」または「5」のレコードを全フィールド抽出
select * from posts where user_id in (2, 4, 5);

-- 「posts」テーブルの「content」に「パスタ」という文字列を含むレコードを全フィールド抽出
select * from posts where content like '%パスタ%';

-- レコードの並び替え
-- 「posts」テーブルの「created」が 新しい順 に全レコードを全フィールド抽出
select * from posts order by created desc;

-- 「posts」テーブルの「created」が 新しい順 に全レコードを全フィールド抽出、なお、同じ日付の場合は、id が少ない順に抽出
select * from posts order by created desc, id desc;

-- レコード数の制限
-- 「posts」テーブルの 0件目 から 5件分のレコードを全フィールド抽出
select * from posts limit 5;

-- 「posts」テーブルの 3件目 から 5件分のレコードを全フィールド抽出
select * from posts limit 2, 5;

