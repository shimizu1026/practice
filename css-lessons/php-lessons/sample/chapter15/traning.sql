-- データベース「sales_management」をUTF-8で作成
create database sales_management default character set utf8;

use sales_management;

-- テーブル「detail」、「sales」、「product」、「customer」をUTF-8で作成
create table detail (
  id int(11) unsigned auto_increment primary key,
  sales_id int(6) unsigned zerofill not null,
  product_id int(11) unsigned not null,
  quantity int(11) unsigned not null
) engine=InnoDB default charset=utf8;

create table sales (
  id int(6) unsigned zerofill auto_increment primary key,
  order_date date not null,
  customer_id int(11) unsigned not null
) engine=InnoDB default charset=utf8;

create table product (
  id int(11) unsigned auto_increment primary key,
  name varchar(255) not null,
  price int(11) unsigned not null
) engine=InnoDB default charset=utf8;

create table customer (
  id int(11) unsigned auto_increment primary key,
  name varchar(255) not null,
  pref varchar(255) not null
) engine=InnoDB default charset=utf8;


-- 「datail」テーブルにレコードを挿入
insert into detail (sales_id, product_id, quantity)
  values (
    1, 1, 2
  ),
  (
    1, 2, 1
  ),
  (
    1, 3, 5
  ),
  (
    2, 4, 2
  ),
  (
    2, 5, 1
  ),
  (
    3, 1, 18
  ),
  (
    3, 5, 1
  ),
  (
    3, 6, 8
  );

  -- 「sles」テーブルにレコードを挿入
  insert into sales (order_date, customer_id)
    values (
      '2018-03-19', 1
    ),
    (
      '2018-03-21', 2
    ),
    (
      '2018-03-23', 3
    );
   
  -- 「product」テーブルにレコードを挿入
  insert into product (name, price)
    values (
      'えんぴつ', 50
    ),
    (
      '消しゴム', 100
    ),
    (
      'のり', 60
    ),
    (
      'ものさし', 80
    ),
    (
      'ノート', 100
    ),
    (
      '文鎮', 100
    );
   
  -- 「customer」テーブルにレコードを挿入
  insert into customer (name, pref)
    values (
      '秋元', '東京都'
    ),
    (
      '前田', '東京都'
    ),
    (
      '柴田', '大阪府'
    );
   
-- 「product」テーブルの全てのレコードを全フィールド抽出
select * from product;

-- 「customer」の「pref」が「東京都」のレコードを全フィールド抽出
select * from customer where pref = '東京都';

-- 「sales」テーブルのレコード数を「total」というフィールド名で抽出
select count(*) as total from sales;

-- 「detail」テーブルの「sales_id」ごとの 「quantityの合計」を抽出
-- なお、表示するフィールドは、「sales_id」と 「quantityの合計（フィールド名は「total」）」とする
select sales_id, sum(quantity) as total
  from detail
  group by sales_id;

-- 「detail」テーブルと「product」テーブルを内部結合し、
-- 「sales_id」が小さい順に、レコードを抽出
-- なお表示するフィールドは、「sales_id」、「name」、「quantity」とする
select d.sales_id, p.name, d.quantity
  from detail as d join product as p
  on d.product_id = p.id
  order by d.sales_id asc;

-- 全てのテーブルを内部結合し、
-- 「sales_id」が小さい順に、レコードを抽出
-- なお表示するフィールドは、「sales_id」（「detail」テーブル）、「order_date」、
-- 「name」（「customer」テーブル）、「pref」、「name」（「product」テーブル）、
-- 「price」「quantity」とする
select
  d.sales_id,
  s.order_date,
  c.name as customer_name,
  c.pref,
  p.name as product_name,
  p.price,
  d.quantity
  from 
    detail as d join
    sales as s join
    product as p join
    customer as c
  on 
    d.sales_id = s.id and
    d.product_id = p.id and
    s.customer_id = c.id
  order by
    d.sales_id asc;
