var fs = require('fs');

// Load native UI library
var gui = require('nw.gui');

// Create a tray icon
var tray = new gui.Tray({icon: 'images/web-components_32x32.png' });

// Give it a menu
var menu = new gui.Menu();
menu.append(new gui.MenuItem({ type: 'checkbox', label: 'box1' }));
tray.menu = menu;
