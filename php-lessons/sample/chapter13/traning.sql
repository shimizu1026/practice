-- 「users」テーブルの全レコード数を「total」というフィールド名で抽出
select count(*) from users;

-- 「users」テーブルの「name」、「password」と「password」の文字数を「length」というフィールド名としたフィールドを、
-- 「password」が、「8」文字以内のレコードのみ抽出して下さい。
select name, password, char_length(password) as length
  from users
  having length <= 8;

-- 「users」テーブルの「email」フィールドの平均文字数を、
-- 「email_length」というフィールド名で抽出して下さい。
select avg(char_length(email)) as email_length from users;

-- 「users」テーブルの「name」、「email」と「email」の文字数を「length」というフィールド名としたフィールドを、
-- 「email」フィールドが「email」フィールドの平均文字数以上のレコードのみ抽出して下さい。
select name, email, char_length(email) as length
  from users
  having length >= (select avg(char_length(email)) from users);

