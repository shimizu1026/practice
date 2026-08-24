const fs = require("fs");
const path = require("path");

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  console.error(
    "環境変数 MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を設定してください。"
  );
  process.exit(1);
}

const config = `window.MICROCMS_CONFIG = {
  serviceDomain: "${serviceDomain}",
  apiKey: "${apiKey}",
};
`;

const outputPath = path.join(__dirname, "../assets/js/config.js");

fs.writeFileSync(outputPath, config, "utf8");
console.log("config.js を生成しました。");
