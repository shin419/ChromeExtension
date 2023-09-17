// Cũng cài vô là đã chạy rồi
// To do ...

chrome.browserAction.onClicked.addListener((/* tab */) => {
  // Trong này thì chưa biết chắc do từng event để check ??

  // Opens our extension in a new browser window.
  // Only if a popup isn't defined in the manifest.
  chrome.tabs.create({
    url: chrome.extension.getURL('www/index.html')
  }, (/* newTab */) => {
    // Tab opened.
  })
})
