-- テーブルの作成
create table posts (
  id int(11) unsigned auto_increment primary key,
  title varchar(255) not null,
  content longtext not null,
  created datetime
) engine=InnoDB default charset=utf8;

-- テーブルの一覧表示
show tables;

-- フィールド情報の表示
desc posts;

-- テーブルの削除
drop table posts;

