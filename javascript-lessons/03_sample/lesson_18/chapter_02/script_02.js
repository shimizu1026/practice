// 要素の取得
const mutationElement = document.querySelector("[data-mutation-trigger]");
const infoElement = document.querySelector("[data-info]");

// コールバック関数
function handleMutation(mutations) {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      // 追加された要素
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          infoElement.textContent = `➕ ${node.tagName}要素が追加されました ${new Date().toLocaleString()}`;
        }
      });

      // 削除された要素
      mutation.removedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          infoElement.textContent = `➖ ${node.tagName}要素が削除されました ${new Date().toLocaleString()}`;
        }
      });
    }
  });
}

// mutation Observer作成
const mutationObserver = new MutationObserver(handleMutation);

// 設定オプションを定義
const config = {
  childList: true, // 子要素の変更を監視
  subtree: true, // 子孫要素も監視
};

// 監視開始
mutationObserver.observe(mutationElement, config);

// クリックイベント
function addElement() {
  const newElement = document.createElement("p");
  newElement.textContent = "新しい要素";
  mutationElement.appendChild(newElement);
}

function removeElement() {
  const lastElement = mutationElement.lastElementChild;
  if (lastElement) {
    mutationElement.removeChild(lastElement);
  }
}
