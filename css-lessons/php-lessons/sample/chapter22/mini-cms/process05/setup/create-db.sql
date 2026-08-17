-- データベースの作成
create database mini_cms_app default character set utf8;

-- データベースの変更
use mini_cms_app;

-- テーブルの作成
create table posts (
  id int(11) unsigned primary key auto_increment,
  title varchar(60) not null,
  content longtext not null,
  category_id int(11),
  created datetime,
  modified timestamp
) engine=InnoDB default charset=utf8;

create table categories (
  id int(11) unsigned primary key auto_increment,
  category_name varchar(60) not null
) engine=InnoDB default charset=utf8;


-- サンプルのレコードを挿入
insert into posts (title, content, category_id, created)
  values (
    'Webサイトを公開しました。',
    '本日、Webサイトを公開しました。お楽しみ下さい。',
    1,
    '2018-04-01 10:00:00'
  ),
  (
    '春の握手会について',
    '4月21日（土）、 22日（日）の2日間、握手会を開催致します。',
    2,
    '2018-04-16 10:00:00'
  ),
  (
    'ゴールデンウィーク休暇について',
    '4月28日（土） 〜 5月6日（日）までの9日間は、休みを頂戴いたします。',
    1,
    '2018-04-20 10:00:00'
  );

insert into categories (category_name)
  values (
    'お知らせ'
  ),
  (
    'イベント情報'
  ),
  (
    '活動報告'
  );
