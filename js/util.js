'use strict';

(function () {
  var getRandomElement = function (array) {
    var randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  };

  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';

  var isEscape = function (evt) {
    return evt.key === ESC_KEY && !window.setup.isSetupInputFocused;
  };

  var isEnter = function (evt) {
    return evt.key === ENTER_KEY;
  };

  window.util = {
    getRandomElement: getRandomElement,
    isEscape: isEscape,
    isEnter: isEnter
  };
})();

