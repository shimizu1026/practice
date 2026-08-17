<?php get_header(); ?>
  <div class="l-contents">
    <div class="l-container">
      <main class="l-main">
        <section class="p-articles">
          <h2 class="c-heading -primary">Blog &amp; News</h2>

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
        </section>

      </main>
      <?php get_sidebar(); ?>
    </div>
    <!-- /.l-container -->
  </div>
  <!-- /.l-contents -->
<?php get_footer(); ?>
