// Content script content goes here or in activatedContentHooks (use activatedContentHooks if you need a variable
// accessible to both the content script and inside a hook
// Trong tiện ích mở rộng
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Tiện ích mở rộng đã nhận thông điệp từ tab: ");
    if (request.message === "Xin chào từ tab!") {
      console.log("Tiện ích mở rộng đã nhận thông điệp từ tab: " + sender.tab.url);
    }
});
  