<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <header class="l-header p-header">
    <div class="l-container">
      <div class="p-header__info">
        <h1 class="p-header__title">
          <?php
            if ( has_custom_logo() ) {
              the_custom_logo();
            }
          ?>
          <a href="<?php echo esc_url( home_url() ); ?>" class="p-logo">
            <?php bloginfo('name'); ?>
          </a>
        </h1>
        <p class="p-header__text"><?php bloginfo('description'); ?></p>
      </div>
      <!-- /.p-header__info -->
      <nav class="p-header__nav">
        <h2 class="screen-reader-text">サイト内メニュー</h2>
        <button class="js-drawer c-button p-hamburger" aria-controls="globalNav" aria-expanded="false">
          <span class="p-hamburger__line">
            <span class="screen-reader-text">メニューを開閉</span>
          </span>
        </button>
        <?php
        $args = [
          'theme_location' => 'global',
          'menu_class'     => 'p-globalNav',
          'menu_id'        => 'globalNav',
          'container'     => false
        ];
          wp_nav_menu($args);
        ?>
      </nav>
    </div>
    <!-- /.p-header__inner -->
  </header>
