function hideElements() {
  browser.tabs.executeScript({
    file: "/stripped-yt.js",
  });
}

browser.browserAction.onClicked.addListener(hideElements);
