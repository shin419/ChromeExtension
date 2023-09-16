// Content script content goes here or in activatedContentHooks (use activatedContentHooks if you need a variable
// accessible to both the content script and inside a hook
// Trong tiện ích mở rộng
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Nhận message từ Extension thành công.");

    // Gửi lại message cho Extension
    chrome.runtime.sendMessage({ message: "Xin chào từ trang web!" });
});
  