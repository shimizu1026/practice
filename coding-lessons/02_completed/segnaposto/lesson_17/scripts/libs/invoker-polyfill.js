/**
 * Invoker Commands API のポリフィル
 *
 * 対応機能:
 * - commandfor属性 + command属性による宣言的な制御
 *   - Dialog要素: show-modal, close, request-close
 *   - Popover要素: show-popover, hide-popover, toggle-popover
 *   - カスタムコマンド: --で始まるコマンド
 * - closedby属性による背景クリック・ESCキー制御（Dialog要素のみ）
 * - 既存のHTMLを変更せずに動作
 */

class InvokerPolyfill {
  constructor(options = {}) {
    this.options = {
      debug: options.debug || false,
      autoInit: options.autoInit !== false, // デフォルトはtrue
      observeChanges: options.observeChanges !== false, // デフォルトはtrue
      ...options,
    };

    // サポート状況の検出
    this.support = {
      command: "commandForElement" in HTMLButtonElement.prototype,
      closedBy: "closedBy" in HTMLDialogElement.prototype,
    };

    // 管理用のWeakMapとSet
    this.appliedButtons = new WeakSet();
    this.appliedDialogs = new WeakSet();
    this.observer = null;

    this.log("InvokerPolyfill initialized with options:", this.options);
    this.log("Browser support:", this.support);

    if (this.options.autoInit) {
      this.init();
    }
  }

  /**
   * デバッグログ出力
   */
  log(...args) {
    if (this.options.debug) {
      console.log("[InvokerPolyfill]", ...args);
    }
  }

  /**
   * 警告ログ出力
   */
  warn(...args) {
    console.warn("[InvokerPolyfill]", ...args);
  }

  /**
   * エラーログ出力
   */
  error(...args) {
    console.error("[InvokerPolyfill]", ...args);
  }

  /**
   * 初期化
   */
  init() {
    this.log("Initializing...");

    // defer属性で読み込まれることを想定し、即座に実行
    this.applyPolyfills();
    if (this.options.observeChanges) {
      this.startObserving();
    }
  }

  /**
   * すべてのポリフィルを適用
   */
  applyPolyfills() {
    this.polyfillCommandAttributes();
    this.polyfillClosedByAttribute();
  }

  /**
   * commandfor/command属性のポリフィル
   */
  polyfillCommandAttributes() {
    if (this.support.command) {
      this.log("✅ Command attributes are natively supported");
      return;
    }

    this.log("🔄 Applying command attributes polyfill...");

    const commandButtons = document.querySelectorAll("button[commandfor][command]");
    let appliedCount = 0;

    commandButtons.forEach((button) => {
      if (this.appliedButtons.has(button)) {
        return; // 既に適用済み
      }

      const targetId = button.getAttribute("commandfor");
      const command = button.getAttribute("command");
      if (!targetId || !command) return;

      const target = document.getElementById(targetId);

      if (!target) {
        this.warn(`Target element with id="${targetId}" not found for button:`, button);
        return;
      }

      // Popover系コマンドは popoverTargetElement / popoverTargetAction で
      // ブラウザに「このボタンが invoker」と認識させる。
      // こうしないと外側クリック扱いになって Light Dismiss と競合してしまう。
      if (this.tryAttachPopoverInvoker(button, target, command)) {
        this.appliedButtons.add(button);
        appliedCount++;
        this.log(`✅ Popover invoker attached: ${command} for #${targetId}`);
        return;
      }

      // それ以外（dialog系・カスタム）は click ハンドラで処理
      const clickHandler = (event) => {
        if (event.defaultPrevented) {
          return; // 既にpreventDefaultが呼ばれていたら実行しない
        }
        event.preventDefault();
        this.executeCommand(target, command, button);
      };

      button.addEventListener("click", clickHandler);

      // 管理用にボタンを記録
      this.appliedButtons.add(button);

      // クリーンアップ用にハンドラーを保存
      button._polyfillClickHandler = clickHandler;

      appliedCount++;
      this.log(`✅ Command polyfill applied: ${command} for #${targetId}`);
    });

    this.log(`Applied command polyfill to ${appliedCount} buttons`);
  }

  /**
   * closedby属性のポリフィル
   */
  polyfillClosedByAttribute() {
    if (this.support.closedBy) {
      this.log("✅ ClosedBy attribute is natively supported");
      return;
    }

    this.log("🔄 Applying closedBy attribute polyfill...");

    const dialogsWithClosedBy = document.querySelectorAll("dialog[closedby]");
    let appliedCount = 0;

    dialogsWithClosedBy.forEach((dialog) => {
      if (this.appliedDialogs.has(dialog)) {
        return; // 既に適用済み
      }

      const closedBy = dialog.getAttribute("closedby");
      if (!closedBy) return;

      switch (closedBy) {
        case "any":
          this.setupLightDismiss(dialog);
          this.setupEscapeKeyClose(dialog);
          break;

        case "closerequest":
          this.setupEscapeKeyClose(dialog);
          break;

        case "none":
          // 何もしない（明示的な閉じるボタンのみ）
          break;

        default:
          this.warn(`Unknown closedby value: ${closedBy}`);
          return; // continueの代わりにreturnを使用
      }

      this.appliedDialogs.add(dialog);
      appliedCount++;
      this.log(`✅ ClosedBy polyfill applied: ${closedBy} for #${dialog.id}`);
    });

    this.log(`Applied closedBy polyfill to ${appliedCount} dialogs`);
  }

  /**
   * コマンドの実行
   */
  executeCommand(target, command, sourceButton) {
    try {
      const commandHandler = this.getCommandHandler(command);
      if (commandHandler) {
        commandHandler.call(this, target, sourceButton);
      } else {
        this.handleCustomCommand(target, command, sourceButton);
      }
    } catch (error) {
      this.error(`Error executing command "${command}":`, error);
    }
  }

  /**
   * Popover系コマンドの場合、ブラウザの popoverTargetElement IDL を使って
   * ボタンを invoker として登録する。これで Light Dismiss と競合しなくなる。
   * 成功したら true を返す（呼び出し側は click ハンドラを仕込まない）。
   */
  tryAttachPopoverInvoker(button, target, command) {
    const popoverActions = {
      "show-popover": "show",
      "hide-popover": "hide",
      "toggle-popover": "toggle",
    };

    const action = popoverActions[command];
    if (!action) return false;
    if (!target.hasAttribute("popover")) return false;
    if (!("popoverTargetElement" in button)) return false;

    try {
      button.popoverTargetElement = target;
      button.popoverTargetAction = action;
      return true;
    } catch (error) {
      this.warn("Failed to attach popover invoker:", error);
      return false;
    }
  }

  /**
   * 組み込みコマンドハンドラーを取得
   */
  getCommandHandler(command) {
    const handlers = {
      "show-modal": this.handleShowModal,
      close: this.handleClose,
      "request-close": this.handleRequestClose,
      "show-popover": this.handleShowPopover,
      "hide-popover": this.handleHidePopover,
      "toggle-popover": this.handleTogglePopover,
    };

    return handlers[command];
  }

  /**
   * show-modalコマンドハンドラー
   */
  handleShowModal(target, sourceButton) {
    if (target.tagName === "DIALOG") {
      target.showModal();
      this.log(`📖 Dialog #${target.id} opened as modal`);
    }
  }

  /**
   * closeコマンドハンドラー
   */
  handleClose(target, sourceButton) {
    if (target.tagName === "DIALOG") {
      target.close();
      this.log(`📕 Dialog #${target.id} closed`);
    }
  }

  /**
   * request-closeコマンドハンドラー
   */
  handleRequestClose(target, sourceButton) {
    if (target.tagName === "DIALOG") {
      // close eventを発火してからclose()を実行
      const closeEvent = new Event("close", { bubbles: false, cancelable: false });
      target.dispatchEvent(closeEvent);
      target.close();
      this.log(`📕 Dialog #${target.id} close requested and closed`);
    }
  }

  /**
   * show-popoverコマンドハンドラー
   */
  handleShowPopover(target, sourceButton) {
    if (target.hasAttribute("popover") && typeof target.showPopover === "function") {
      target.showPopover();
      this.log(`🎈 Popover #${target.id} shown`);
    }
  }

  /**
   * hide-popoverコマンドハンドラー
   */
  handleHidePopover(target, sourceButton) {
    if (target.hasAttribute("popover") && typeof target.hidePopover === "function") {
      target.hidePopover();
      this.log(`🎈 Popover #${target.id} hidden`);
    }
  }

  /**
   * toggle-popoverコマンドハンドラー
   */
  handleTogglePopover(target, sourceButton) {
    if (target.hasAttribute("popover") && typeof target.togglePopover === "function") {
      target.togglePopover();
      this.log(`🎈 Popover #${target.id} toggled`);
    }
  }

  /**
   * カスタムコマンドの処理
   */
  handleCustomCommand(target, command, sourceButton) {
    if (command.startsWith("--")) {
      const commandEvent = new CustomEvent("command", {
        detail: {
          command: command,
          source: sourceButton,
        },
        bubbles: true,
        cancelable: true,
      });
      target.dispatchEvent(commandEvent);
      this.log(`🎯 Custom command "${command}" dispatched to #${target.id}`);
    } else {
      this.warn(`Unknown command: ${command}`);
    }
  }

  /**
   * ライトディスミス（背景クリックで閉じる）機能を設定
   */
  setupLightDismiss(dialog) {
    const clickHandler = (event) => {
      // ダイアログがモーダルでない場合は動作しない
      if (!dialog.open || !dialog.hasAttribute("open")) return;

      const rect = dialog.getBoundingClientRect();
      const clickX = event.clientX;
      const clickY = event.clientY;

      // クリック位置がダイアログの範囲外かどうかを判定
      const isOutside = clickX < rect.left || clickX > rect.right || clickY < rect.top || clickY > rect.bottom;

      if (isOutside) {
        dialog.close();
        this.log(`📕 Dialog #${dialog.id} closed by light dismiss`);
      }
    };

    dialog.addEventListener("click", clickHandler);

    // クリーンアップ用にハンドラーを保存
    dialog._polyfillLightDismissHandler = clickHandler;
  }

  /**
   * ESCキーで閉じる機能を設定
   */
  setupEscapeKeyClose(dialog) {
    const keydownHandler = (event) => {
      if (event.key === "Escape" && dialog.open) {
        // モーダルダイアログかどうかを判定
        const isModal = dialog.matches(":modal");

        if (!isModal) {
          dialog.close();
          this.log(`📕 Dialog #${dialog.id} closed by escape key`);
        }
      }
    };

    document.addEventListener("keydown", keydownHandler);

    // クリーンアップ用にハンドラーを保存
    dialog._polyfillEscapeHandler = keydownHandler;
  }

  /**
   * MutationObserverを開始
   */
  startObserving() {
    if (this.observer) {
      return; // 既に監視中
    }

    this.observer = new MutationObserver((mutations) => {
      let shouldReapply = false;

      mutations.forEach((mutation) => {
        // 新しいノードが追加された場合
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.matches("button[commandfor][command]") || node.querySelector("button[commandfor][command]") || node.matches("dialog[closedby]") || node.querySelector("dialog[closedby]")) {
              shouldReapply = true;
            }
          }
        });

        // 属性が変更された場合
        if (mutation.type === "attributes") {
          const target = mutation.target;
          if (
            (target.tagName === "BUTTON" && (mutation.attributeName === "commandfor" || mutation.attributeName === "command")) ||
            (target.tagName === "DIALOG" && mutation.attributeName === "closedby")
          ) {
            shouldReapply = true;
          }
        }
      });

      if (shouldReapply) {
        // 少し遅延させて重複実行を防ぐ
        setTimeout(() => {
          this.applyPolyfills();
        }, 0);
      }
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["commandfor", "command", "closedby"],
    });

    this.log("Started observing DOM changes");
  }

  /**
   * MutationObserverを停止
   */
  stopObserving() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
      this.log("Stopped observing DOM changes");
    }
  }

  /**
   * ポリフィルを手動で再適用
   */
  reapply() {
    this.log("🔄 Manually reapplying polyfills...");
    this.applyPolyfills();
  }

  /**
   * 特定の要素にのみポリフィルを適用
   */
  applyToElement(element) {
    this.log("🔄 Applying polyfill to specific element:", element);

    // commandfor属性を持つボタンの場合
    if (element.matches("button[commandfor][command]")) {
      if (!this.support.command && !this.appliedButtons.has(element)) {
        const targetId = element.getAttribute("commandfor");
        const command = element.getAttribute("command");
        if (!targetId || !command) return;

        const target = document.getElementById(targetId);

        if (target) {
          // Popover系コマンドは invoker として登録する
          if (this.tryAttachPopoverInvoker(element, target, command)) {
            this.appliedButtons.add(element);
            this.log(`✅ Popover invoker attached to specific element: ${command} for #${targetId}`);
            return;
          }

          const clickHandler = (event) => {
            if (event.defaultPrevented) {
              return; // 既にpreventDefaultが呼ばれていたら実行しない
            }
            event.preventDefault();
            this.executeCommand(target, command, element);
          };

          element.addEventListener("click", clickHandler);
          this.appliedButtons.add(element);
          element._polyfillClickHandler = clickHandler;

          this.log(`✅ Command polyfill applied to specific element: ${command} for #${targetId}`);
        }
      }
    }

    // closedby属性を持つダイアログの場合
    if (element.matches("dialog[closedby]")) {
      if (!this.support.closedBy && !this.appliedDialogs.has(element)) {
        const closedBy = element.getAttribute("closedby");
        if (!closedBy) return;

        switch (closedBy) {
          case "any":
            this.setupLightDismiss(element);
            this.setupEscapeKeyClose(element);
            break;
          case "closerequest":
            this.setupEscapeKeyClose(element);
            break;
        }

        this.appliedDialogs.add(element);
        this.log(`✅ ClosedBy polyfill applied to specific element: ${closedBy} for #${element.id}`);
      }
    }

    // 子要素もチェック
    const childButtons = element.querySelectorAll("button[commandfor][command]");
    const childDialogs = element.querySelectorAll("dialog[closedby]");

    childButtons.forEach((button) => this.applyToElement(button));
    childDialogs.forEach((dialog) => this.applyToElement(dialog));
  }

  /**
   * ポリフィルをクリーンアップ
   */
  cleanup() {
    this.log("🧹 Cleaning up polyfill...");

    this.stopObserving();

    // ボタンのイベントリスナーをクリーンアップ
    document.querySelectorAll("button[commandfor][command]").forEach((button) => {
      if (button._polyfillClickHandler) {
        button.removeEventListener("click", button._polyfillClickHandler);
        delete button._polyfillClickHandler;
      }
    });

    // ダイアログのイベントリスナーをクリーンアップ
    document.querySelectorAll("dialog[closedby]").forEach((dialog) => {
      if (dialog._polyfillLightDismissHandler) {
        dialog.removeEventListener("click", dialog._polyfillLightDismissHandler);
        delete dialog._polyfillLightDismissHandler;
      }
      if (dialog._polyfillEscapeHandler) {
        document.removeEventListener("keydown", dialog._polyfillEscapeHandler);
        delete dialog._polyfillEscapeHandler;
      }
    });

    // WeakSetをクリア
    this.appliedButtons = new WeakSet();
    this.appliedDialogs = new WeakSet();

    this.log("✅ Cleanup completed");
  }

  /**
   * カスタムコマンドハンドラーを追加
   */
  addCommandHandler(command, handler) {
    if (typeof handler !== "function") {
      throw new Error("Command handler must be a function");
    }

    // 既存のgetCommandHandlerをオーバーライド
    const originalGetCommandHandler = this.getCommandHandler;
    this.getCommandHandler = function (cmd) {
      if (cmd === command) {
        return handler;
      }
      return originalGetCommandHandler.call(this, cmd);
    };

    this.log(`✅ Custom command handler added: ${command}`);
  }

  /**
   * サポート状況を取得
   */
  getSupport() {
    return { ...this.support };
  }

  /**
   * バージョン情報
   */
  static get version() {
    return "2.0.0";
  }
}

// グローバルに公開
window.InvokerPolyfill = InvokerPolyfill;

// デフォルトインスタンスを自動作成
window.invokerPolyfill = new InvokerPolyfill();

/**
 * 使用方法:
 *
 * 1. defer属性での読み込み（推奨）:
 * <script src="invoker-polyfill.js" defer></script>
 *
 * <button commandfor="dialog" command="show-modal">Open Dialog</button>
 * <dialog id="dialog" closedby="any">Dialog Content</dialog>
 *
 * <button commandfor="popover" command="toggle-popover">Toggle Popover</button>
 * <div id="popover" popover>Popover Content</div>
 *
 * 2. 手動初期化:
 * const polyfill = new InvokerPolyfill({ autoInit: false, debug: true });
 * polyfill.init();
 *
 * 3. 特定要素への適用:
 * invokerPolyfill.applyToElement(document.getElementById('my-dialog'));
 *
 * 4. カスタムコマンドの追加:
 * invokerPolyfill.addCommandHandler('--my-custom-command', function(target, sourceButton) {
 *   console.log('Custom command executed on:', target);
 * });
 *
 * 5. クリーンアップ:
 * invokerPolyfill.cleanup();
 *
 * 6. グローバルアクセス:
 * window.invokerPolyfill.reapply();
 * window.invokerPolyfill.cleanup();
 *
 * 対応要素:
 * - Dialog要素: <dialog> with closedby attribute
 * - Popover要素: <div popover> / <section popover> etc.
 * - 任意の要素: カスタムコマンドで制御可能
 */
