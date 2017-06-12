let ids = new Map([["watch7-content", "watch-discussion"], // comments
                  ["watch8-sentiment-actions", "watch7-views-info"], // main view count
                  ["watch8-action-buttons", "watch8-sentiment-actions"]]);  // ratings

for (let [key, value] of ids) {
  var parent = document.getElementById(key);
  var element = document.getElementById(value);
  parent.removeChild(element);
}

let classes = new Map([["yt-uix-button-subscription-container", "yt-subscriber-count"], // subscription count
                      ["content-link spf-link yt-uix-sessionlink spf-link ", "stat view-count"]]); // related view counts

for (let [key, value] of classes) {
  var parents = document.getElementsByClassName(key);
  var elements = document.getElementsByClassName(value);
  console.log(elements);
  for (var i = 0; i < elements.length; i++) {
    // console.log(i);
    parents[i].removeChild(elements[i]);
  }
}
