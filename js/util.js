'use strict';

(function () {
  var getRandomElement = function (array) {
    var randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  };
  var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  window.util = {
    randomSelection: getRandomElement,
    wizardCoatColorList: WIZARDS_COAT_COLOR,
    wizardEyesColorList: WIZARDS_EYES_COLOR
  };
})();

