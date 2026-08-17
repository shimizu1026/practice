<?php
  // セッションの開始
  session_start();

  // ポストが空っぽだったらリダイレクト
  if ( empty($_POST) ) {
    header("Location: ./");
    exit();
  }

  // CSRF対策 ・・・ トークンを確認
  if (empty($_POST['token']) || $_POST['token'] != $_SESSION['token']) {
    exit('不正な投稿です。');
  }

  // エラーメッセージ格納用の配列を初期化
  $_SESSION['error'] = array();

  // お名前の入力チェック
  if ( $_POST['name'] == '' ) {
    $_SESSION['error']['name'] = 'お名前を入力して下さい。';
  }

  // メールアドレスの入力チェック
  if ( !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {
    $_SESSION['error']['email'] = 'メールアドレスの形式が正しくありません。';
  }

  if ( $_POST['email'] == '' ) {
    $_SESSION['error']['email'] = 'メールアドレスを入力して下さい。';
  }

  // お問い合わせ内容の入力チェック
  if ( $_POST['message'] == '' ) {
    $_SESSION['error']['message'] = 'お問い合わせ内容を入力して下さい。';
  }

  // セッションにポストを格納
  $_SESSION['post'] = $_POST;


  if ( empty($_SESSION['error']) ) {
    // エラーなし
    header('Location: conf.php');

  } else {
    // エラーあり
    header('Location: ./');
  }
  exit;
