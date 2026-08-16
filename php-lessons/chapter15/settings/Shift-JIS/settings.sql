-- データベースの作成
drop database if exists my_bank;
create database my_bank default character set utf8;

-- データベースの選択
use my_bank;

-- テーブルの作成
drop table if exists account_a;
create table account_a (
  id int(11) unsigned auto_increment primary key,
  name varchar(255) not null,
  balance bigint(20) unsigned not null,
  modified timestamp
) engine=InnoDB default charset=utf8;

drop table if exists account_b;
create table account_b (
  id int(11) unsigned auto_increment primary key,
  name varchar(255) not null,
  balance bigint(20) unsigned not null,
  modified timestamp
) engine=InnoDB default charset=utf8;

-- レコードの挿入
insert into account_a(name, balance) values('秋元', 100000);
insert into account_b(name, balance) values('前田', 100000);

-- レコードの一覧表示
select * from account_a;
select * from account_b;

