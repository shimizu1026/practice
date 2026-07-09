const loginButton = document.querySelector("[data-login]");
const logoutButton = document.querySelector("[data-logout]");
const statusElem = document.querySelector("[data-status]");

// クッキーを設定する関数
const setCookie = (name, value) => {
  try {
    document.cookie = `${name}=${value}; path=/`;
    return true;
  } catch (error) {
    console.error("クッキーの保存に失敗:", error);
    return false;
  }
};

// クッキーを取得する関数
const getCookie = (name) => {
  try {
    // document.cookieは "key1=value1; key2=value2; key3=value3" 形式
    const cookies = document.cookie.split("; "); // セミコロンで分割して配列に
    for (const cookie of cookies) {
      const [key, value] = cookie.split("="); // 各クッキーを「=」で分割
      if (key === name) {
        return value;
      }
    }
    return null;
  } catch (error) {
    console.error("クッキーの取得に失敗:", error);
    return null;
  }
};

// ログイン状態を表示する関数
const updateLoginStatus = () => {
  const token = getCookie("token");
  if (token) {
    statusElem.textContent = "ログイン中";
  } else {
    statusElem.textContent = "ログアウト中";
  }

  // ※ 実際のWebアプリでは、サーバー側でトークンの有効性を確認します
  // フロント側の表示は参考程度で、実際のアクセス権限はサーバーが判断します
};

// ログインボタン
loginButton.addEventListener("click", () => {
  // ※ 実際にはサーバーでID/パスワードを確認後、トークンを受け取ります
  if (setCookie("token", "abc123xyz456def")) {
    updateLoginStatus();
    alert("ログインしました");
  }
});

// ログアウトボタン
logoutButton.addEventListener("click", () => {
  setCookie("token", "");
  updateLoginStatus();
  alert("ログアウトしました");
});

// ページ読み込み時にログイン状態を確認
window.addEventListener("load", updateLoginStatus);
