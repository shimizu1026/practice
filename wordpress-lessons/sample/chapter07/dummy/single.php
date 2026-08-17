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

        <section class="p-comments">
					<div class="p-comments__innter">
						<h2 class="p-comments__title">コメントとトラックバック</h2>

						<ul class="p-comments__list">
							<li id="comment-2" class="comment byuser comment-author-ore bypostauthor even thread-even depth-1">
								<article id="div-comment-2" class="comment-body">
									<footer class="comment-meta">
										<div class="comment-author vcard">
											<img class="avatar" src="http://placehold.it/130x130">
											<b class="fn">著者名</b> <span class="says">より:</span>
										</div><!-- .comment-author -->

										<div class="comment-metadata">
											<a href="#">
												<time datetime="2019-09-30T09:42:46+09:00">
													2019年9月30日 9:42 AM </time>
											</a>
											<span class="edit-link"><a class="comment-edit-link" href="#">編集</a></span> </div><!-- .comment-metadata -->

									</footer><!-- .comment-meta -->

									<div class="comment-content">
										<p>コメント。コメント。コメント。コメント。コメント。コメント。</p>
									</div><!-- .comment-content -->

									<div class="reply">
										<a rel="nofollow" class="comment-reply-link" href="#comment-2" data-commentid="2" data-postid="104" data-belowelement="div-comment-2" data-respondelement="respond" aria-label="返信">返信</a>
									</div>
								</article><!-- .comment-body -->
							</li><!-- #comment-## -->
							<li id="comment-3" class="comment byuser comment-author-ore bypostauthor odd alt thread-odd thread-alt depth-1 parent">
								<article id="div-comment-3" class="comment-body">
									<footer class="comment-meta">
										<div class="comment-author vcard">
											<img class="avatar" src="http://placehold.it/130x130">
											<b class="fn">著者名</b> <span class="says">より:</span>
										</div><!-- .comment-author -->

										<div class="comment-metadata">
											<a href="#">
												<time datetime="2019-09-30T09:42:56+09:00">
													2019年9月30日 9:42 AM </time>
											</a>
											<span class="edit-link"><a class="comment-edit-link" href="#">編集</a></span> </div><!-- .comment-metadata -->

									</footer><!-- .comment-meta -->

									<div class="comment-content">
										<p>
			                      コメント。コメント。コメント。コメント。<br />
			                      コメント。コメント。コメント。
			                    </p>
									</div><!-- .comment-content -->

									<div class="reply">
										<a rel="nofollow" class="comment-reply-link" href="#comment-3" data-commentid="3" data-postid="104" data-belowelement="div-comment-3" data-respondelement="respond" aria-label="返信">返信</a>
									</div>
								</article><!-- .comment-body -->
								<ul class="children">
									<li id="comment-5" class="comment byuser comment-author-ore bypostauthor even depth-2">
										<article id="div-comment-5" class="comment-body">
											<footer class="comment-meta">
												<div class="comment-author vcard">
													<img class="avatar" src="http://placehold.it/130x130">
													<b class="fn">著者名</b> <span class="says">より:</span>
												</div><!-- .comment-author -->

												<div class="comment-metadata">
													<a href="#">
														<time datetime="2019-09-30T19:24:15+09:00">
															2019年9月30日 7:24 PM </time>
													</a>
													<span class="edit-link"><a class="comment-edit-link" href="#">編集</a></span> </div><!-- .comment-metadata -->

											</footer><!-- .comment-meta -->

											<div class="comment-content">
												<p>これが返信だ</p>
											</div><!-- .comment-content -->

											<div class="reply">
												<a rel="nofollow" class="comment-reply-link" href="#comment-5" data-commentid="5" data-postid="104" data-belowelement="div-comment-5" data-respondelement="respond" aria-label="返信">返信</a>
											</div>
										</article><!-- .comment-body -->
									</li><!-- #comment-## -->
								</ul><!-- .children -->
							</li><!-- #comment-## -->
							<li id="comment-4" class="comment byuser comment-author-ore bypostauthor odd alt thread-even depth-1">
								<article id="div-comment-4" class="comment-body">
									<footer class="comment-meta">
										<div class="comment-author vcard">
											<img class="avatar" src="http://placehold.it/130x130">
											<b class="fn">著者名</b> <span class="says">より:</span>
										</div><!-- .comment-author -->

										<div class="comment-metadata">
											<a href="#">
												<time datetime="2019-09-30T09:43:06+09:00">
													2019年9月30日 9:43 AM </time>
											</a>
											<span class="edit-link"><a class="comment-edit-link" href="#">編集</a></span> </div><!-- .comment-metadata -->

									</footer><!-- .comment-meta -->

									<div class="comment-content">
										<p>コメント。コメント。コメント。</p>
									</div><!-- .comment-content -->

									<div class="reply">
										<a rel="nofollow" class="comment-reply-link" href="#comment-4" data-commentid="4" data-postid="104" data-belowelement="div-comment-4" data-respondelement="respond" aria-label="返信">返信</a>
									</div>
								</article><!-- .comment-body -->
							</li><!-- #comment-## -->
						</ul>

						<section class="p-comments__form">
							<div id="respond" class="comment-respond">
								<h3 id="reply-title" class="comment-reply-title">コメントを残す</h3>
								<p class="comment-notes">メールアドレスが公開されることはありません。 * が付いている欄は必須項目です</p>
								<form action="#" class="comment-form">
									<p class="logged-in-as">
			                    <a href="#" aria-label="著者名 としてログイン中。プロフィールを編集。">著者名 としてログイン中</a>。
			                    <a href="#">ログアウトしますか ?</a>
			                  </p>
									<p class="comment-form-comment">
			                    <label for="comment">コメント</label>
			                    <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
			                  </p>
									<p class="form-submit">
			                    <input name="submit" type="submit" id="submit" class="submit" value="コメントを送信" />
			                  </p>
								</form>
							</div><!-- #respond -->
						</section>
					</div>
				</section>

      </main>
      <?php get_sidebar(); ?>
    </div>
    <!-- /.l-container -->
  </div>
  <!-- /.l-contents -->

  <?php endwhile; ?>
<?php get_footer(); ?>
