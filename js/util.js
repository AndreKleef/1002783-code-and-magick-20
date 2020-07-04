'use strict';

(function () {
  var getRandomElement = function (array) {
    var randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  };

  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';

  var isSetupInputFocused = false;
  var userNameInput = document.querySelector('.setup-user-name');

  userNameInput.addEventListener('focus', function () {
    isSetupInputFocused = true;
  });

  userNameInput.addEventListener('blur', function () {
    isSetupInputFocused = false;
  });

  window.util = {
    getRandomElement: getRandomElement,
    isEscape: function (evt, action) {
      if (evt.key === ESC_KEY && !isSetupInputFocused) {
        evt.preventDefault();
        action();
      }
    },
    isEnter: function (evt, action) {
      if (evt.key === ENTER_KEY) {
        evt.preventDefault();
        action();
      }
    }
  };
})();

