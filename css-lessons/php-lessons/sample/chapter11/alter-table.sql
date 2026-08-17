-- フィールドを末尾に追加
alter table posts add modified datetime;
desc posts;

-- フィールドを指定位置に追加
alter table posts add user_id int(11) after id;
desc posts;

-- フィールドを先頭に追加
alter table posts add post_id int(11) first;
desc posts;

-- フィールドを削除
alter table posts drop post_id;
desc posts;

-- フィールドの制約変更
alter table posts modify user_id int(11) unsigned not null;
desc posts;