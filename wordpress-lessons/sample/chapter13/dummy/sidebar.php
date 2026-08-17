      <?php if ( is_active_sidebar( 'sidebar' ) ) : ?>
      <div class="l-sub">
        <?php dynamic_sidebar( 'sidebar' ); ?>

        <?php
          $args = [
            'posts_per_page' => 5,
            'post_status' => 'publish',
            'orderby' => 'meta_value_num',
            'meta_key' => '_post_views',
            'order' => 'DESC'
          ];

          $the_query = new WP_Query( $args );
        ?>
        <?php if ( $the_query->have_posts() ) : ?>
        <aside class="p-widget -light">
          <h2 class="p-widget__title">人気の記事</h2>
          <ul>
          <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
            <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a> <small class="post-date"><?php echo esc_html(get_post_meta($post->ID , '_post_views' ,true) ); ?> Views</small></li>
          <?php endwhile; ?>
          </ul>
        </aside>
        <?php endif; wp_reset_postdata(); ?>
      </div>
      <!-- /.l-sub -->
      <?php endif; ?>
