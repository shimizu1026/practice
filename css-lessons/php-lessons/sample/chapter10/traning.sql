-- データベースの作成
create database my_blog default character set utf8;

-- データベースの一覧表示
show databases;

-- データベースの選択
use my_blog;

-- テーブルの作成
create table users (
  id int(11) unsigned auto_increment primary key,
  name varchar(255) not null,
  email varchar(100) not null unique,
  password varchar(255) not null
) engine=InnoDB default charset=utf8;

-- テーブルの一覧表示
show tables;

-- フィールド情報の表示
desc users;

-- テーブルの削除
drop table users;

-- データベースの削除
drop database my_blog;



