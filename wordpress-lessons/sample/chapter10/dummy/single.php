<?php get_header(); ?>

  <?php while ( have_posts() ) : the_post(); ?>
  <div class="l-contents">
    <div class="l-container">
      <main class="l-main">

        <div class="p-article">
          <header class="p-article__header">
            <h1 class="p-article__title -detail"><?php the_title(); ?></h1>

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

      </main>
      <?php get_sidebar(); ?>
    </div>
    <!-- /.l-container -->
  </div>
  <!-- /.l-contents -->

  <?php endwhile; ?>
<?php get_footer(); ?>
