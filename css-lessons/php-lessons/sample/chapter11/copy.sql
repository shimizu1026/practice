-- テーブルのフィールド構造とデータのコピー
create table new_posts select * from posts;
select * from new_posts;
desc new_posts;

-- 主キーや連番の設定
alter table new_posts add primary key(id);
alter table new_posts modify id int(11) unsigned auto_increment;
desc new_posts;