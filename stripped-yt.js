setInterval(disable, 3000);

function disable() {
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
