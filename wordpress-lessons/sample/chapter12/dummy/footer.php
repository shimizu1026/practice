  <footer class="l-footer">
    <div class="l-container">
      <?php if ( is_active_sidebar( 'footer' ) ) : ?>
      <div class="c-grid -gutter">
        <?php dynamic_sidebar( 'footer' ); ?>
      </div>
      <!-- /.c-grid -->
      <?php endif; ?>
      <p class="l-footer__text"><small>&copy; 2019 Dummy.</small></p>
    </div>
    <!-- /.l-container -->
  </footer>
  <?php wp_footer(); ?>
</body>
</html>
