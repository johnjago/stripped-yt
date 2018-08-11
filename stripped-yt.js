/**
 * So many parts of YouTube lazy load, so we have to do this the hard way.
 */

var clicker = setInterval(switchOffToggles, 1000);

function switchOffToggles() {
  var settings = document.getElementsByClassName('ytp-button ytp-settings-button')[0];
  var menu = document.getElementsByClassName('ytp-popup ytp-settings-menu')[0];

  settings.click();
  menu.style.display = 'none';

  var menuItems = document.getElementsByClassName('ytp-menuitem');
  console.log(menuItems.length);

  if (menuItems.length >= 4) {
    for (var i = 0; i < menuItems.length; i++) {
      var isToggle = menuItems[i].getAttribute('role') === 'menuitemcheckbox';
      var isEnabled = menuItems[i].getAttribute('aria-checked') === 'true';
      if (isToggle && isEnabled) {
        menuItems[i].click();
      }
      clearInterval(clicker);
    }
  }
}
