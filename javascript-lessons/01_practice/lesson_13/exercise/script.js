// 画面の読み込みが完了したら、html 要素に data-status="loaded" 属性 を設定
window.addEventListener("load", (event) => {
	html.setAttribute("data-status", loaded);
})

//  data-button 属性が指定されている要素を取得

//  4で取得した要素のクリックイベントを監視し、イベントが発生したら 6 ~ 7 の処理が行われるようにする

//  イベントが発生した要素（ button ）の aria-expanded 属性 の真偽値を反転させる（false だったら true 、 true だったら false）

// getAttribute()の戻り値は文字列
// 前回のレッスンでも説明した通り、getAttribute() で取得した値は、文字列になります。いくら属性値に false や true などの真偽値が指定されていても文字列して取得されます。
//  ドロワーメニューとして展開する div 要素（#drawer）の、aria-hidden 属性の真偽値を切り替える（展開時： false、非表示時：true）

// aria-hidden属性
// aria-hidden属性は、スクリーンリーダーから要素を隠すかどうかを制御する属性です。 値が true の時はスクリーンリーダーから隠し、false （または属性を削除）でアクセス可能にします。視覚的な表示・非表示とは独立して、支援技術での認識を制御できる属性で、ドロワーメニューのように動的なUIコンポーネントでも活用できます。
//  「style.css」を編集して、自由なデザイン、アニメーションを定義