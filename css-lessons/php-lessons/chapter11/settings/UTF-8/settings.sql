-- データベースの作成
drop database if exists my_blog;
create database my_blog default character set utf8;

-- データベースの選択
use my_blog;

-- テーブルの作成
drop table if exists posts;
create table posts (
  id int(11) unsigned auto_increment primary key,
  title varchar(255) not null,
  content longtext not null,
  created datetime
) engine=InnoDB default charset=utf8;

drop table if exists users;
create table users (
  id int(11) unsigned auto_increment primary key,
  name varchar(255) not null,
  email varchar(100) not null unique,
  password varchar(255) not null
) engine=InnoDB default charset=utf8;

-- データベースの一覧表示
show databases;

-- テーブルの一覧表示
show tables;

-- フィールド情報の表示
desc posts;
desc users;
