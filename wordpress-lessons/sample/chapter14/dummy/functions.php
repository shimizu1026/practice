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
    HTML5をサポート
  ----------------------------------- */
  $args = [
    'search-form',
    'comment-form',
    'comment-list',
    'gallery',
    'caption'
  ];
  add_theme_support( 'html5', $args);

  /*
    アイキャッチ画像
  ----------------------------------- */
  add_theme_support( 'post-thumbnails' );

  // 画像サイズを追加
  set_post_thumbnail_size(776, 549, true); // 投稿ページ用
  add_image_size('dummy-thumbnail', 248, 175, true); // 投稿一覧用
  add_image_size('dummy-thumbnail@2x', 496, 350, true);
  add_image_size('dummy-full', 1200, 400, true); // 固定ページ用

  /*
    カスタムロゴ
  ----------------------------------- */
  $args = [
    'width'       => 160,
    'height'      => 32,
    'flex-width'  => true,
    'header-text' => [ 'p-logo', 'p-header__text' ],
  ];
  add_theme_support( 'custom-logo', $args );

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


/*======================================
  カスタム投稿タイプ & カスタムタクソノミー
======================================*/
function dummy_post_type_init() {
  /*
    カスタム投稿タイプ（制作実績）
  ----------------------------------- */
  $labels = [
    'name'      => '制作実績',
    'all_items' => '制作実績一覧',
  ];

  $args = [
    'labels'        => $labels,
    'discription'   => '制作実績の紹介',
    'public'        => true,
    'menu_position' => 5,
    'menu_icon'     => 'dashicons-desktop',
    'supports'      => [
      'title',
      'editor',
      'thumbnail',
      'custom-fields',
    ],
    'has_archive'   => true,
    'query_var'     => true,
    'show_in_rest'  => true,
    'taxonomies'    => [
      'work_type',
      'work_contents',
    ],
  ];
  register_post_type('works',$args);

  /*
    カスタムタクソノミー（作品のタイプ）
  ----------------------------------- */
  $labels = [
    'name'         => '作品のタイプ',
    'add_new_item' => '新しい作品のタイプを追加',
  ];

  $args = [
    'labels'            => $labels,
    'discription'       => '作品の種類を分類するタクソノミー',
    'show_admin_column' => true,
    'hierarchical'      => true,
    'show_in_rest'      => true
  ];
  register_taxonomy('work_type', 'works', $args);

  /*
    カスタムタクソノミー（作業）
  ----------------------------------- */
  $labels = [
    'name'         => '作業内容',
    'add_new_item' => '新しい作業内容を追加',
  ];

  $args = [
    'labels'            => $labels,
    'discription'       => '作業内容を分類するタクソノミー',
    'show_admin_column' => true,
    'show_in_rest'      => true
  ];
  register_taxonomy('work_contents', 'works', $args);
}

add_action('init', 'dummy_post_type_init');


/*======================================
  抜粋文を調整
======================================*/
/*
  文字数の変更
----------------------------------- */
function dummy_excerpt_length( $length ) {
  return 32;
}
add_filter( 'excerpt_length', 'dummy_excerpt_length', 999 );

/*
  省略時の文字変更
----------------------------------- */
function dummy_excerpt_more($more) {
  return '...';
}
add_filter('excerpt_more', 'dummy_excerpt_more');

/*======================================
  閲覧数のカウント
======================================*/
function update_post_views() {
  global $post; // $post にアクセスできるようにする

  // 公開されている記事でかつ、個別投稿ページの場合
  if ('publish' === get_post_status($post) && is_single()) {
    // 現在の閲覧数を整数値で取得
    $views = intval(get_post_meta($post->ID, '_post_views', true));

    // 現在の閲覧数に「1」を加えた値で更新
    update_post_meta($post->ID, '_post_views', ($views + 1));
  }
}
add_action('wp_head', 'update_post_views');

/*======================================
  テーマカスタマイザー
======================================*/
function dummy_customize_register( $wp_customize ) {
  // セクション、テーマ設定、コントロールを追加します。
  $wp_customize->add_section( 'front_page_options' , [
    'title'       => 'フロントページ設定',
    'priority'    => 130,
    'description' => 'フロントページの設定',
  ]);

  /*
    キャッチコピー
  ----------------------------------- */
  $wp_customize->add_setting( 'hero_text', [
    'default' => 'Hello. I\'m Web Designer'
  ]);

  $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'hero_text_field', [
      'label'    => 'キャッチコピー',
      'section'  => 'front_page_options',
      'settings' => 'hero_text',
      'type'     => 'text',
    ])
  );

  /*
    ヒーローイメージ
  ----------------------------------- */
  $wp_customize->add_setting( 'hero_image', [
    'default' => get_theme_file_uri() . '/assets/images/hero-image.jpg'
  ]);

  $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'hero_image_upload', [
      'label'       => 'ヒーローイメージ',
      'section'     => 'front_page_options',
      'settings'    => 'hero_image',
      'description' => '画像をアップロードするとデフォルトの画像と入れ替わります。',
    ])
  );
}
add_action( 'customize_register', 'dummy_customize_register' );

/*======================================
  トップページが「最新の投稿」の時の対策
======================================*/
function dummy_front_page_template( $template ) {
  return is_home() ? '' : $template;
}
add_filter( 'frontpage_template', 'dummy_front_page_template' );
