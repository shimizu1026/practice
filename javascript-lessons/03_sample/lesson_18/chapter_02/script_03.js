// コールバック関数
function handlePerformance(list) {
  list.getEntries().forEach((entry) => {
    switch (entry.entryType) {
      case "navigation":
        console.log(`ページ読み込み: ${entry.loadEventEnd - entry.loadEventStart}ms`);
        break;
      case "resource":
        console.log(`リソース読み込み: ${entry.name} - ${entry.duration}ms`);
        break;
      case "measure":
        console.log(`カスタム測定: ${entry.name} - ${entry.duration}ms`);
        break;
    }
  });
}

// Performance Observer作成・監視開始
const performanceObserver = new PerformanceObserver(handlePerformance);
performanceObserver.observe({
  entryTypes: ["navigation", "resource", "measure"],
});
