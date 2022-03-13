// Turn off autoplay. The autoplay switch cannot be clicked until some time
// after their JavaScript has finished running, so we need to try a few times
// and hope that it has loaded by then. The last one at 10 seconds is for very
// slow connections. The goal here is to allow autoplay to be turned back on
// if wanted, like for a music playlist, so there is a tradeoff between
// allowing this and making sure that it disables for people on slow connections.
// We do the same for the annotations switch.
window.addEventListener('load', (event) => {
	setTimeout(turnOffAutoplay, 1000);
	setTimeout(turnOffAutoplay, 3000);
	setTimeout(turnOffAutoplay, 5000);
	setTimeout(turnOffAutoplay, 10000);

	setTimeout(turnOffAnnotations, 1000);
	setTimeout(turnOffAnnotations, 3000);
	setTimeout(turnOffAnnotations, 5000);
	setTimeout(turnOffAnnotations, 10000);
});

function turnOffAutoplay() {
	var autoplay = document.querySelector('[data-tooltip-target-id="ytp-autonav-toggle-button"]');
	// The element that has the accessibility label is not the but rather a div inside it
	var autoplayOn = document.querySelector('.ytp-autonav-toggle-button').getAttribute('aria-checked') === 'true';
	if (autoplay && autoplayOn) {
		autoplay.click();
	}
}

function turnOffAnnotations() {
  var menuItems = document.getElementsByClassName('ytp-menuitem');

  // Menu items are not in the DOM until you open the menu
  if (menuItems.length === 0) {
    var settings = document.getElementsByClassName('ytp-button ytp-settings-button')[0];
    settings.click();
    var menu = document.getElementsByClassName('ytp-popup ytp-settings-menu')[0];
    menu.style.display = 'none';
  }

  for (var i = 0; i < menuItems.length; i++) {
    var isToggle = menuItems[i].getAttribute('role') === 'menuitemcheckbox';
    var isEnabled = menuItems[i].getAttribute('aria-checked') === 'true';
    if (isToggle && isEnabled) {
      menuItems[i].click();
    }
  }
}
