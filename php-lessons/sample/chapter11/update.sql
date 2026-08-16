-- レコードの更新
update
  posts
set
  title = '2回目の投稿！',
  modified = '2017-05-10 12:00:00'
where
  id = 2
;

select * from posts;