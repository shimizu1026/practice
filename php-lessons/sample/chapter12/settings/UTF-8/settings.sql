-- データベースの作成
drop database if exists my_blog;
create database my_blog default character set utf8;

-- データベースの選択
use my_blog;

-- テーブルの作成
drop table if exists posts;
create table posts (
  id int(11) unsigned auto_increment primary key,
  user_id int(11) unsigned not null,
  title varchar(255) not null,
  content longtext not null,
  created datetime,
  modified datetime
) engine=InnoDB default charset=utf8;

drop table if exists users;
create table users (
  id int(11) unsigned auto_increment primary key,
  name varchar(255) not null,
  email varchar(100) not null unique,
  password varchar(255) not null,
  created datetime,
  modified datetime
) engine=InnoDB default charset=utf8;


-- レコードの挿入
insert into posts(
  user_id,
  title,
  content,
  created,
  modified
)
values (
  2,
  'ブログ始めました',
  'ついに、ブログを始めました。毎日更新するので楽しみにしてくださいね。',
  '2017/04/07 10:00:00',
  '2017/04/07 10:00:00'
),
(
  1,
  '2回目の投稿！',
  'こんにちは、2回目のブログですね。ちゃんと続いてますよ。',
  '2017/04/08 10:00:00',
  '2017/04/08 10:00:00'
),
(
  3,
  'そろそろ・・・',
  'こんにちは、そろそろネタが尽きてきました。',
  '2017/04/09 10:00:00',
  '2017/04/09 10:00:00'
),
(
  3,
  'まだやってます',
  '1度、このブログをやめようと思いまいしたが、まだやることにしました。',
  '2017/04/11 10:00:00',
  '2017/04/11 10:00:00'
),
(
  3,
  '久しぶりの投稿',
  'お久しぶりです。ちょっと日が空いてしまいましたね。',
  '2017/05/01 10:00:00',
  '2017/05/01 10:00:00'
),
(
  3,
  'また、空いちゃいました',
  'お久しぶりです。またまた日が空いてしまいましたね。',
  '2017/05/31 10:00:00',
  '2017/05/31 10:00:00'
),
(
  4,
  'おいしいお店発見！',
  'こんにちは、おいしいパスタのお店を発見しました。',
  '2017/07/15 10:00:00',
  '2017/07/15 10:00:00'
),
(
  5,
  '一人旅してます',
  'こんにちは。今、北海道にいてます。一人旅してます。',
  '2017/07/15 10:00:00',
  '2017/07/15 10:00:00'
),
(
  4,
  'また、行っちゃいました',
  'こんにちは、先日見つけた美味しいパスタのお店に、また行っちゃいました。',
  '2017/07/17 10:00:00',
  '2017/07/17 10:00:00'
),
(
  3,
  '限界です',
  'こんにちは、もうブログを続けるのは限界です。',
  '2017/07/18 10:00:00',
  '2017/07/18 10:00:00'
);

insert into users(
  name,
  email,
  password,
  created,
  modified
)
values (
  '前田',
  'maeda@dummy.com',
  'maemae',
  '2017/04/03 10:00:00',
  '2017/07/15 10:00:00'
),
(
  '大島',
  'oshima@dummy.com',
  'oshioshi',
  '2017/04/05 10:00:00',
  '2017/04/05 10:00:00'
),
(
  '高橋',
  'takahashi@dummy.com',
  'takataka',
  '2017/04/07 10:00:00',
  '2017/05/10 10:00:00'
),
(
  '指原',
  'sashihara@dummy.jp',
  'sashisashi',
  '2017/07/14 10:00:00',
  '2017/07/20 10:00:00'
),
(
  '山本',
  'yamamoto@dummy.net',
  'yamayama',
  '2017/07/14 10:00:00',
  '2017/08/10 10:00:00'
);


-- レコードの一覧表示
select * from posts;
select * from users;
