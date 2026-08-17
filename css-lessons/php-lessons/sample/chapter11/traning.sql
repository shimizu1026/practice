-- フィールドを末尾に追加
alter table users add created datetime;
alter table users add modified datetime;

desc users;

-- レコードの挿入
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
  '2017/04/03 10:00:00'
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
  '2017/04/07 10:00:00'
),
(
  '指原',
  'sashihara@dummy.com',
  'sashisashi',
  '2017/04/09 10:00:00',
  '2017/04/09 10:00:00'
);

select * from users;

-- レコードの更新
update
  users
set
  password = 'takatakashi',
  modified = '2017-04-12 12:00:00'
where
  id = 3
;

select * from users;

-- レコードの削除
delete from users where id=4;

select * from users;