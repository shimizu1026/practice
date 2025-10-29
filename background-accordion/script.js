// script.js
"use strict";

const items = document.querySelectorAll('.accordion-item');
const bgImages = document.querySelectorAll('.accordion-bg');
const bgContainer = document.querySelector('.accordion-bg-container');

// 初期設定: すべての背景画像を非表示に
gsap.set(bgImages, { autoAlpha: 0 });

// 最初の項目を開き、最初の背景画像を表示する
const firstItem = items[0];
const firstTarget = firstItem.dataset.imgTarget;
const initialBg = bgContainer.querySelector(`.accordion-bg[data-img="${firstTarget}"]`);

// 最初の背景画像をフェードイン
gsap.to(initialBg, { autoAlpha: 1, duration: 0.5 });
// 最初の項目を開く (高さを計算して設定)
openAccordion(firstItem);


items.forEach(item => {
    item.querySelector('.accordion-header').addEventListener('click', () => {
        // クリックされた項目がすでに開いているか確認
        const isOpen = item.classList.contains('open');

        // すべての項目を閉じる
        closeAllAccordions();

        if (!isOpen) {
            // 閉じていた場合は、その項目を開く
            openAccordion(item);

            // 背景画像の切り替えを実行
            handleBgChange(item.dataset.imgTarget);
        } else {
             // 開いていた場合は、閉じる処理の後に背景を非アクティブにする（任意）
             // 例: 最初の背景に戻す、またはデフォルトの背景に戻すなど
             // handleBgChange(firstTarget);
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

    // 最初にCSSで設定された padding を元に戻し、高さを 'auto' に設定して高さを計算させる
    gsap.set(content, { paddingTop: 15, paddingBottom: 15 });

    // 一時的に高さを 'auto' にして実際の高さを取得
    gsap.set(content, { height: 'auto' });
    const contentHeight = content.offsetHeight; 
    gsap.set(content, { height: 0 }); // 高さを元に戻す

    // GSAPで高さをアニメーションさせて開く
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

// ----------------------------------------------------------------
// 背景画像切り替えの関数
// ----------------------------------------------------------------

/**
 * 背景画像を切り替えるアニメーションを実行します。
 * @param {string} targetKey - 表示したい画像の data-img 属性値
 */
function handleBgChange(targetKey) {
    const targetBg = bgContainer.querySelector(`.accordion-bg[data-img="${targetKey}"]`);

    bgImages.forEach(img => {
        if (img === targetBg) {
            // ターゲット画像をフェードイン
            gsap.to(img, { autoAlpha: 1, duration: 0.5, zIndex: 1 });
        } else {
            // 他の画像をフェードアウト
            gsap.to(img, { autoAlpha: 0, duration: 0.5, zIndex: 0 });
        }
    });
}