<?php get_header(); ?>

  <main class="l-main -single">
    <header class="p-hero">
      <h1 class="p-hero__title"><?php post_type_archive_title(); ?></h1>
    </header>
    <section class="l-contents">
      <div class="l-container">

      <?php if ( have_posts() ) :?>

        <div class="c-grid -gutter">

          <?php while( have_posts() ) : the_post(); ?>

            <?php get_template_part('template-parts/content', 'works'); ?>

          <?php endwhile; ?>

        </div>
        <!-- /.c-grid -->

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
      </div>
      <!-- /.l-container -->
    </section>
    <!-- /.l-contents -->
  </main>

<?php get_footer(); ?>
