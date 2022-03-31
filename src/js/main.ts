import "../css/libs/font-awesome.min.css";
import "../css/sass/main.scss";
const {toggleBtn, toggleSubMenu} = require("./ts/modules/sidebar");
const {toggleFullscreen} = require("./ts/modules/header");
const {toggleSettingsBox, changeColors} = require("./ts/modules/settingsBox");

// Sidebar...
// Toggle Show And Hide Navigation
toggleBtn();

// Toggle Show And Hide Submenu Links
toggleSubMenu();
// _-_-_-_-_-_-_-_-_-_-_-

// Header...
// Open / Close Fullscreen Window
toggleFullscreen();

// Toggle Show And Hide Settings Box
toggleSettingsBox();

// Change Main Color 
changeColors()
// _-_-_-_-_-_-_-_-_-_-_-