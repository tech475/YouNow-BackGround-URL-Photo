// ==UserScript==
// @name         Change Background of www.younow.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change the background of www.younow.com
// @author       tech475
// @match        https://www.younow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Change the CSS property 'background-image' to set the new background image
    document.body.style.backgroundImage = 'url("URL PHOTO")';
})();