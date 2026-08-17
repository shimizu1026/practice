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
  ----------------------------------- */
  add_theme_support( 'title-tag' );

  /*
    アイキャッチ画像
  ----------------------------------- */
  add_theme_support( 'post-thumbnails' );

  // 画像サイズを追加
  set_post_thumbnail_size(1200, 600, true); // 投稿ページ用
  add_image_size('dummy-thumbnail', 248, 175, true); // 投稿一覧用
  add_image_size('dummy-thumbnail@2x', 496, 350, true);

  /*
    カスタムメニュー
  ----------------------------------- */
  $locations = [
    'global' => 'Global Navigation'
  ];
  register_nav_menus($locations);
}
add_action( 'after_setup_theme', 'dummy_setup' );

/*======================================
  スタイル・スクリプトの追加
======================================*/
function dummy_scripts() {

  /*
    CSS
  ----------------------------------- */
  wp_enqueue_style( 'dummy-common', get_theme_file_uri() .'/assets/css/common.css' );
  wp_enqueue_style( 'google-font', 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700|Quicksand:400,700&display=swap&subset=japanese' );

  /*
    JS
  ----------------------------------- */
  wp_enqueue_script( 'dummy-app', get_theme_file_uri() .'/assets/js/app.js', ['jquery'], '1.0.0', true );

}
add_action( 'wp_enqueue_scripts', 'dummy_scripts' );

/*======================================
  ウィジェットの有効化
======================================*/
function dummy_widgets_init() {
  /*
    サイドバー
  ----------------------------------- */
  $args = [
    'name'          => 'Sidebar',
    'id'            => 'sidebar',
    'before_widget' => '<aside id="%1$s" class="p-widget -light %2$s">',
    'after_widget'  => '</aside>',
    'before_title'  => '<h2 class="p-widget__title">',
  ];
  register_sidebar($args);

  /*
    フッター
  ----------------------------------- */
  $args = [
    'name'          => 'Footer',
    'id'            => 'footer',
    'before_widget' => '<div class="c-grid__item -tab4Of12"><aside id="%1$s" class="p-widget -dark %2$s">',
    'after_widget'  => '</aside></div>',
    'before_title'  => '<h2 class="p-widget__title">',
  ];
  register_sidebar($args);
}
add_action( 'widgets_init', 'dummy_widgets_init' );
