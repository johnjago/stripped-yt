var comments = document.getElementById("watch-discussion");
var parent = document.getElementById("watch7-content");
parent.removeChild(comments);

var views = document.getElementById("watch7-views-info");
var parent = document.getElementById("watch8-sentiment-actions");
parent.removeChild(views);

var ratings = document.getElementById("watch8-sentiment-actions");
var parent = document.getElementById("watch8-action-buttons");
parent.removeChild(ratings);

var watchSubs = document.querySelector(".exp-responsive #content .yt-uix-button-subscription-container .yt-subscriber-count");
var parent = document.querySelector(".yt-uix-button-subscription-container");
parent.removeChild(watchSubs);
