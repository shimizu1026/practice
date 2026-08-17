<?php get_header(); ?>

  <?php while ( have_posts() ) : the_post(); ?>
  <div class="l-contents">
    <div class="l-container">
      <main class="l-main">

        <div class="p-article">
          <header class="p-article__header">
            <h1 class="p-article__title -detail"><?php the_title(); ?></h1>
            <p class="p-article__text">閲覧数：<?php echo esc_html(get_post_meta($post->ID , '_post_views' ,true) ); ?></p>
            <?php if ( has_post_thumbnail()) : ?>
            <figure class="p-article__eyecatch">
              <?php the_post_thumbnail(); ?>
            </figure>
            <?php endif; ?>

            <p class="p-article__text">
              <time datetime="<?php the_time( DATE_W3C ); ?>" class="p-article__time">
                <?php the_time( get_option( 'date_format' ) ); ?>
              </time>
            </p>
            <?php the_category(); ?>

          </header>
          <section class="p-article__body">
            <?php the_content(); ?>
          </section>
          <footer class="p-article__footer">
            <p class="p-article__text"><?php the_tags(); ?></p>
            <section class="p-author">
              <h2 class="p-author__title">この記事を書いた人</h2>
              <p class="p-author__name"><?php the_author_posts_link(); ?></p>
            </section>
          </footer>

          <?php
            $args = [
              'prev_text' => '前の記事<br>%title',
              'next_text' => '次の記事<br>%title',
            ];
            the_post_navigation($args);
          ?>
        </div>

        <?php if ( comments_open() || get_comments_number() ) :
          comments_template();
        endif; ?>


        <aside class="p-artciles u-mt--sp--medium u-mb--sp--medium">
          <h2 class="c-heading -primary">関連記事</h2>
          <?php
            // 現在の記事のカテゴリーの一覧を取得
            $categories = get_the_category();

            // 現在の記事のカテゴリーの一覧から、カテゴリーIDの配列を作成
            $cate_ids = [];
            foreach( $categories as $category) {
              $cate_ids[] = $category->term_id;
            }

            $args = [
              'posts_per_page' => 4,
              'category__in' => $cate_ids,
              'post__not_in' => array($post->ID)
            ];

            $the_query = new WP_Query( $args );
          ?>

          <?php if ( $the_query->have_posts() ) : ?>

            <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

              <?php get_template_part('template-parts/content'); ?>

            <?php endwhile; ?>

          <?php else : ?>

          <p>関連する記事はありません。</p>

          <?php endif; wp_reset_postdata(); ?>
        </aside>
      </main>
      <?php get_sidebar(); ?>
    </div>
    <!-- /.l-container -->
  </div>
  <!-- /.l-contents -->

  <?php endwhile; ?>
<?php get_footer(); ?>
