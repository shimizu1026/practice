<?php get_header(); ?>
  <div class="l-contents">
    <div class="l-container">
      <main class="l-main">
        <div class="p-articles">
          <h1 class="c-heading -primary"><?php the_archive_title(); ?></h1>

          <?php if ( have_posts() ) :?>

            <?php while( have_posts() ) : the_post(); ?>

              <?php get_template_part('template-parts/content'); ?>

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
        </div>

      </main>
      <?php get_sidebar(); ?>
    </div>
    <!-- /.l-container -->
  </div>
  <!-- /.l-contents -->
<?php get_footer(); ?>
