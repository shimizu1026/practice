// script.js (修正後のコード)
"use strict";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".img_box").forEach((container) => {
    const image = container.querySelector(".prlximg__target");

    if (!image) return; 

    gsap.fromTo(
        image, 
        { 
            // y: "20%",  => これを新しい余白の量に合わせます
            y: "100%", // ★修正: height: 150% なので、50%下にずらして下端に合わせる 
        },
        {
            y: "0%", // 終了: 元の位置 (上方向に動いたように見える)
            ease: "none",
            scrollTrigger: {
                trigger: container, 
                start: "top bottom", 
                end: "bottom top",
                scrub: true, 
                markers: true, 
            }
        }
    );
});