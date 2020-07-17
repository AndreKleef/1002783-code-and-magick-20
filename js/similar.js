'use strict';

(function () {

  var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', 'e6e848'];

  var wizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
  var setupFireBallWrap = document.querySelector('.setup-fireball-wrap');

  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.wizard.renderWizards(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  wizardCoatColor.addEventListener('click', function () {
    var randomCoatColor = window.util.getRandomElement(WIZARDS_COAT_COLOR);

    wizardCoatColor.style.fill = randomCoatColor;
    window.setup.coatColorInput.value = wizardCoatColor.style.fill;

    coatColor = randomCoatColor;
    updateWizards();
  });

  wizardEyesColor.addEventListener('click', function () {
    var randomEyesColor = window.util.getRandomElement(WIZARDS_EYES_COLOR);

    wizardEyesColor.style.fill = randomEyesColor;
    window.setup.eyesColorInput.value = wizardEyesColor.style.fill;

    eyesColor = randomEyesColor;
    updateWizards();
  });

  setupFireBallWrap.addEventListener('click', function () {
    var randomColor = window.util.getRandomElement(FIREBALLS);

    setupFireBallWrap.style.background = randomColor;
    window.setup.fireballColorInput.value = randomColor;
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; width: 50%; margin: 0 auto; border-radius: 20px; padding: 7px 0; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.top = '30px';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);
})();

