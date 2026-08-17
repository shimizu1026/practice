<?php get_header(); ?>

  <main class="l-main -single">
    <div class="p-hero -home">
      <figure class="p-hero__eyecatch">
        <img src="<?php echo esc_url(get_theme_file_uri()); ?>/assets/images/hero-image.jpg" alt="">
      </figure>
      <p class="p-hero__title">Hello. I'm Web Designer</p>
    </div>
    <section class="l-contents -themeWhite">
      <div class="l-container">
        <h2 class="c-heading -primary -center">最新の制作実績</h2>

        <?php
          $args = [
            'post_type' => 'works',
            'posts_per_page' => 4,
          ];

          $the_query = new WP_Query( $args );
        ?>

        <?php if ( $the_query->have_posts() ) : ?>

        <div class="c-grid -gutter">

          <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

            <?php get_template_part('template-parts/content', 'works'); ?>

          <?php endwhile; ?>

        </div>
        <!-- /.c-grid -->
        <p class="l-contents__button"><a href="works/" class="c-button -primary">全ての制作実績を見る</a></p>

        <?php else : ?>

        <p>投稿がありません。</p>

        <?php endif; wp_reset_postdata(); ?>

      </div>
      <!-- /.l-container -->
    </section>
    <!-- /.l-contents -->
    <section class="l-contents">
      <div class="l-container">
        <h2 class="c-heading -primary -center">最新のブログ &amp; ニュース</h2>

        <?php
          $args = [
            'posts_per_page' => 6,
          ];

          $the_query = new WP_Query( $args );
        ?>

        <?php if ( $the_query->have_posts() ) : ?>

        <div class="c-grid -gutter p-articles">

          <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

            <div class="c-grid__item -tab6Of12">

              <?php get_template_part('template-parts/content'); ?>

            </div>
            <!-- /.c-grid__item  -->
          <?php endwhile; ?>

        </div>
        <!-- /.c-grid -->
        <p class="l-contents__button"><a href="blog/" class="c-button -primary">全てのブログ &amp; ニュースを見る</a></p>

        <?php else : ?>

        <p>投稿がありません。</p>

        <?php endif; wp_reset_postdata(); ?>

      </div>
      <!-- /.l-container -->
    </section>
    <!-- /.l-contents -->
  </main>

<?php get_footer(); ?>
