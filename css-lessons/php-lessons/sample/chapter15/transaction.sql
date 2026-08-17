-- トランザクションの開始
begin;

-- 出金と入金の処理
update account_a set balance = 50000 where id = 1;
update account_b set balance = 125000 where id = 1;

select * from account_a;
select * from account_b;

-- 一連の処理を取り消す
rollback;

select * from account_a;
select * from account_b;

-- 出金と入金の処理
update account_a set balance = 50000 where id = 1;
update account_b set balance = 150000 where id = 1;

select * from account_a;
select * from account_b;

-- 処理を確定
commit;

select * from account_a;
select * from account_b;