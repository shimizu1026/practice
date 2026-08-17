<?php get_header(); ?>

  <?php while ( have_posts() ) : the_post(); ?>
  <main class="l-main -single">
    <div class="l-contents -themeWhite">
      <div class="p-article">
        <div class="l-container -slim">
          <header class="p-article__header">
            <h1 class="p-article__title -detail -center"><?php the_title(); ?></h1>

            <?php if ( has_post_thumbnail()) : ?>
              <figure class="p-article__eyecatch">
                <?php the_post_thumbnail(); ?>
              </figure>
            <?php endif; ?>

            <dl class="p-article__metaList">
              <dt>作成日</dt>
              <dd>
                <time datetime="<?php the_time( DATE_W3C ); ?>" class="p-article__time">
                  <?php the_time( get_option( 'date_format' ) ); ?>
                </time>
              </dd>
              <dt>作品のタイプ</dt>
              <dd>
                <?php
                  $terms = get_the_terms($post->ID, 'work_type');
                  // echo '<pre>';
                  // print_r($terms);
                  // echo '</pre>';
                ?>
                <?php if( $terms && !is_wp_error($terms) ) :  ?>
                  <ul class="post-categories -inList">
                  <?php foreach($terms as $term) : ?>
                    <li><a href="<?php echo esc_url( get_term_link($term, $term->taxonomy) ); ?>"><?php echo esc_html($term->name); ?></a></li>
                  <?php endforeach; ?>
                  </ul>
                <?php endif; ?>
              </dd>
              <dt>作業内容</dt>
              <dd>
              <?php $terms = get_the_terms($post->ID, 'work_contents'); ?>
              <?php if( $terms && !is_wp_error($terms)) :  ?>
                <ul class="post-categories -inList">
                <?php foreach($terms as $term) :  ?>
                  <li><a href="<?php echo esc_url( get_term_link($term, $term->taxonomy) ); ?>"><?php echo esc_html($term->name); ?></a></li>
                <?php endforeach; ?>
                </ul>
              <?php endif; ?>
              </dd>
            </dl>
          </header>
          <section class="p-article__body">
            <?php the_content(); ?>
          </section>
        </div>
        <!-- /.l-container -->
      </div>
      <!-- /.l-article -->
    </div>
    <!-- /.l-contents -->
  </main>

  <?php endwhile; ?>

<?php get_footer(); ?>
