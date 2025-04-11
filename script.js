"use strict";

//ページの HTML が完全に読み込まれた後に中の処理を実行するよう指示
document.addEventListener('DOMContentLoaded', function() {
	// ナビゲーションリンクにイベントリスナーを追加
	const navLinks = document.querySelectorAll('.nav-link');
	const pageTransition = document.querySelector('.page-transition');

	// pageTransitionが存在することを確認
	if (!pageTransition) {
		console.error('トランジション要素が見つかりません');
		return;
	}

	navLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			// デフォルトの遷移を防止
			e.preventDefault();
			
			// クリックされたリンクのURLを取得
			const targetUrl = this.getAttribute('href');
			// デバッグ用
			console.log('遷移先URL:', targetUrl); 
			
			// トランジションアニメーションを開始
			pageTransition.classList.add('active');
			
			// アニメーション完了後に新しいページへ遷移
			setTimeout(function() {
				// 直接location.hrefを設定して確実に遷移
				window.location.href = targetUrl;
			}, 500); // アニメーションの時間と同じ値にする
		});
	});
});