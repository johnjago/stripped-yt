// Remove elements from channel page and search results.

var classes = [
  "yt-subscription-button-subscriber-count-branded-horizontal yt-subscriber-count",
  "stat view-count",
  "yt-lockup-meta",
  "yt-subscription-button-subscriber-count-branded-horizontal subscribed yt-uix-tooltip",
];

for (let item of classes) {
  var classElements = document.getElementsByClassName(item);
  for (let i = 0; i < classElements.length; i++) {
    classElements[i].style.display = "none";
  }
}

// Remove watch page elements.

var ids = [
  "watch7-views-info",
  "watch8-sentiment-actions",
  "watch-discussion",
  "watch-related",
];

for (let id of ids) {
  var element = document.getElementById(id);
  element.style.display = "none";
}

// Fix empty space in sidebar.

var sidebarFix = document.getElementById("watch7-sidebar-contents");
sidebarFix.style.minHeight = "0";
