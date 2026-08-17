<?php
/*======================================
  コンテンツ幅
======================================*/
if ( ! isset( $content_width ) ) {
  $content_width = 776;
}

/*======================================
  初期設定
======================================*/
function dummy_setup() {

  /*
    Titleタグ
  ------------------------------------------------ */
  add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'dummy_setup' );

/*======================================
  スタイル・スクリプトの追加
======================================*/
function dummy_scripts() {

  // CSS
  wp_enqueue_style( 'dummy-common', get_theme_file_uri() .'/assets/css/common.css' );
  wp_enqueue_style( 'google-font', 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700|Quicksand:400,700&display=swap&subset=japanese' );

  // JS
  wp_enqueue_script( 'dummy-app', get_theme_file_uri() .'/assets/js/app.js', ['jquery'], '1.0.0', true );

}
add_action( 'wp_enqueue_scripts', 'dummy_scripts' );
