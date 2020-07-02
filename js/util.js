'use strict';

(function () {
  var getRandomElement = function (array) {
    var randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  };

  window.util = {
    getRandomElement: getRandomElement
  };
})();

