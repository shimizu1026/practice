// script.js (画像内包用)
"use strict";

const items = document.querySelectorAll('.accordion-item');

// 最初の項目を開いておく
openAccordion(items[0]); 


items.forEach(item => {
    item.querySelector('.accordion-header').addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // すべての項目を閉じる
        closeAllAccordions();

        if (!isOpen) {
            // 閉じていた場合は、その項目を開く
            openAccordion(item);
        }
    });
});

// ----------------------------------------------------------------
// アコーディオン開閉の関数
// ----------------------------------------------------------------

/**
 * すべてのアコーディオンを閉じます。
 */
function closeAllAccordions() {
    items.forEach(item => {
        item.classList.remove('open');
        // GSAPで高さをアニメーションさせて閉じる
        gsap.to(item.querySelector('.accordion-content'), { 
            height: 0, 
            paddingTop: 0, 
            paddingBottom: 0, 
            duration: 0.4 
        });
    });
}

/**
 * 特定のアコーディオンを開きます。
 * @param {HTMLElement} item - 開く対象のアコーディオン要素
 */
function openAccordion(item) {
    const content = item.querySelector('.accordion-content');

    // (A) GSAPでアニメーションさせるための準備
    // CSSで設定する padding (style.cssの .accordion-content に合わせてください)
    const contentPadding = 20; 

    gsap.set(content, { paddingTop: contentPadding, paddingBottom: contentPadding });

    // (B) 一時的に高さを 'auto' にしてコンテンツ全体の高さを取得
    gsap.set(content, { height: 'auto' });
    const contentHeight = content.offsetHeight; 
    gsap.set(content, { height: 0 }); // 高さを元に戻す

    // (C) GSAPで高さをアニメーションさせて開く
    gsap.to(content, { 
        height: contentHeight, 
        duration: 0.4,
        onComplete: () => {
            // アニメーション完了後、高さを 'auto' に戻してレスポンシブに対応
            gsap.set(content, { height: 'auto' });
        }
    });
    item.classList.add('open');
}