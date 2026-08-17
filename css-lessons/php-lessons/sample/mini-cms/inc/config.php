<?php
// サイトの定数
define('SITE_NAME', 'Mini CMS');
define('SITE_URL', 'http://localhost/php-lessons/sample/mini-cms');

// データベースの定数
define('DB_NAME', 'mini_cms_app'); // データベース名
define('DB_USER', 'root'); // ユーザー名 
define('DB_PASSWORD', ''); // パスワード （MAMPは「root」）
define('DSN', 'mysql:host=localhost;dbname='. DB_NAME . ';charset=utf8');