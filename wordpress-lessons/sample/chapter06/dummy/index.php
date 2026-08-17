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
        <h1 class="p-header__title"><a href="<?php echo esc_url( home_url() ); ?>" class="p-logo"><?php bloginfo('name'); ?></a></h1>
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
  <div class="l-contents">
    <div class="l-container">
      <main class="l-main">
        <section class="p-articles">
          <h2 class="c-heading -primary">Blog &amp; News</h2>

          <?php if ( have_posts() ) :?>

            <?php while( have_posts() ) : the_post(); ?>

            <article class="c-media p-article">
              <div class="c-media__body">
                <h3 class="p-article__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                <?php the_category(); ?>
                <p class="p-article__text"><time datetime="<?php the_time( DATE_W3C ); ?>" class="p-article__time"><?php the_time( get_option( 'date_format' ) ); ?></time></p>
              </div>
              <figure class="c-media__thumbnail">
              <?php if ( has_post_thumbnail() ) : ?>
                <?php the_post_thumbnail( 'dummy-thumbnail' ) ?>
              <?php else : ?>
                <img src="<?php echo esc_url(get_theme_file_uri()); ?>/assets/images/no-picture.png" srcset="<?php echo esc_url(get_theme_file_uri()); ?>/assets/images/no-picture.png, <?php echo esc_url(get_theme_file_uri()); ?>/assets/images/no-picture@2x.png 2x" alt="アイキャッチ画像はありません">
              <?php endif; ?>
              </figure>
              <!-- /.c-media__thumbnail -->
            </article>

            <?php endwhile; ?>

            <?php
              // ページネーション
              $args = [
                'prev_text' => '<span class="screen-reader-text">前へ</span>',
                'next_text' => '<span class="screen-reader-text">次へ</span>'
              ];
              the_posts_pagination( $args );
            ?>

          <?php else : ?>

            <p>投稿がありません。</p>

          <?php endif; ?>
        </section>

      </main>
      <div class="l-sub">
        <?php dynamic_sidebar( 'sidebar' ); ?>
      </div>
      <!-- /.l-sub -->
    </div>
    <!-- /.l-container -->
  </div>
  <!-- /.l-contents -->
  <footer class="l-footer">
    <div class="l-container">
      <div class="c-grid -gutter">
        <div class="c-grid__item -tab4Of12">
          <aside id="calendar-3" class="p-widget -dark widget_calendar">

            <h2 class="p-widget__title">プロフィール</h2>
            <div class="textwidget custom-html-widget">
              ここにプロフィールの文章。ここにプロフィールの文章。ここにプロフィールの文章。ここにプロフィールの文章。ここにプロフィールの文章。ここにプロフィールの文章。ここにプロフィールの文章。ここにプロフィールの文章。ここにプロフィールの文章。
            </div>
          </aside>
        </div>
        <div class="c-grid__item -tab4Of12">
          <aside id="categories-5" class="p-widget -dark widget_categories">
            <h2 class="p-widget__title">最近の投稿</h2>
            <ul>
              <li><a href="single.html">記事タイトル記事タイトル記事タイトル記事タイトル</a></li>
              <li><a href="single.html">記事タイトル記事タイトル記事タイトル記事タイトル</a></li>
              <li><a href="single.html">記事タイトル記事タイトル記事タイトル記事タイトル</a></li>
              <li><a href="single.html">記事タイトル記事タイトル記事タイトル記事タイトル</a></li>
              <li><a href="single.html">記事タイトル記事タイトル記事タイトル記事タイトル</a></li>
            </ul>
          </aside>
        </div>

        <div class="c-grid__item -tab4Of12">
          <aside id="archives-3" class="p-widget -dark widget_archive">
            <h2 class="p-widget__title">カテゴリー</h2>
            <ul>
              <li>
                <a href="#">カテゴリ名</a>
                <span class="post-date">2019年6月19日</span>
              </li>
              <li>
                <a href="#">カテゴリ名</a>
                <span class="post-date">2019年6月19日</span>
              </li>
              <li>
                <a href="#">カテゴリ名</a>
                <span class="post-date">2019年6月19日</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <!-- /.c-grid -->
      <p class="l-footer__text"><small>&copy; 2019 Dummy.</small></p>
    </div>
    <!-- /.l-container -->
  </footer>
  <?php wp_footer(); ?>
</body>
</html>
