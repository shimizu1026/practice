// DOMの読み込みが完了したら実行するイベントリスナーを設定
document.addEventListener('DOMContentLoaded', function() {
	// 新しいdiv要素を作成し、これがオーバーレイとなる
	const overlay = document.createElement('div');
	// 作成したdiv要素にCSSで参照するためのクラス名を追加
	overlay.className = 'blur-overlay';
	// 作成したオーバーレイ要素をbody要素の子要素として追加
	document.body.appendChild(overlay);
	
	// サブメニューを持つナビアイテムを全て取得（:hasセレクタを使用）
	const navItemsWithSubmenu = document.querySelectorAll('.header-nav-item:has(.header-sub-menu)');
	
	// 取得した各ナビアイテムに対してイベントリスナーを設定
	navItemsWithSubmenu.forEach(item => {
	  // マウスが要素に入ったときのイベント設定
	  item.addEventListener('mouseenter', function() {
		// オーバーレイにactiveクラスを追加して表示状態にする
		overlay.classList.add('active');
	  });
	  
	  // マウスが要素から出たときのイベント設定
	  item.addEventListener('mouseleave', function() {
		// オーバーレイからactiveクラスを削除して非表示状態にする
		overlay.classList.remove('active');
	  });
	});
  });