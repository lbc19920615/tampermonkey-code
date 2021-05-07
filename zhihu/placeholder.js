// ==UserScript==
// @name         封杀zhihu placeholder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?domain=zhihu.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
var css = `
.SearchBar-input input.Input {
}

.SearchBar-input input.Input::placeholder {
 color: transparent;

}
`,
  head = document.head || document.getElementsByTagName('head')[0],
  style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
// This is required for IE8 and below.
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}
})();