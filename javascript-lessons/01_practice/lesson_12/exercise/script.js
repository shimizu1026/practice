// data-text 属性が指定されている要素を取得
const textElem = document.querySelector("[");
// data-text 属性が指定されている要素の子要素の span 要素を全て取得

// html要素の data-disable-script 属性を削除
// data-disabled-script 属性の役割
// data-disable-script 属性は、JavaScriptが無効な環境をCSS側で判別できる様に指定しています。画面表示時に、JavaScriptで data-disable-script 属性を削除する命令を記述しておくことで、 data-disable-script 属性 が残っている場合は、JavaScirptが利用できない環境であると判別できます。

// この練習問題では、画面表示後、1秒経過してもhtml要素に data-disable-script 属性 が残っている場合は、JavaScript が利用できない環境と判断して、CSSアニメーションによって、.text-displayの opacity が 1 となり、JavaScript が無効な環境であっても、テキストが非表示になり続けることを防いでいます。

// 各 span 要素 にランダムな位置の translate プロパティ（インラインスタイル）をセット

// 0.5秒後に、以下の命令を実行

// data-text 属性が指定されている要素にクラス is-active を指定（.text-display の opacity が 1 になる）
// 全てのspan要素の translate プロパティを 0 または、translate プロパティを削除（トランジションの定義はあらかじめCSS側で用意している）