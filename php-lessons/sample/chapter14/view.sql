-- ビューを作成し、抽出条件を保存
create view view1
  as
    select p.id, p.title, p.content, u.name, p.created
    from new_posts as p left join users as u
    on p.user_id = u.id
    order by p.created desc;

-- テーブル一の覧の表示　
show tables;

-- ビューの表示
select * from view1;

-- ビューの削除
drop view view1;
show tables;