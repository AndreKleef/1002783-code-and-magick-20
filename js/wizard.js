'use strict';
(function () {

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', 'e6e848'];

  var wizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
  var setupFireBallWrap = document.querySelector('.setup-fireball-wrap');

  var MAX_WIZARD_SIMILAR = 4;

  wizardCoatColor.addEventListener('click', function () {
    var randomCoatColor = window.util.getRandomElement(WIZARDS_COAT_COLOR);

    wizardCoatColor.style.fill = randomCoatColor;
    window.setup.coatColorInput.value = wizardCoatColor.style.fill;
    window.similar.coatColor = randomCoatColor;
  });

  wizardEyesColor.addEventListener('click', function () {
    var randomEyesColor = window.util.getRandomElement(WIZARDS_EYES_COLOR);

    wizardEyesColor.style.fill = randomEyesColor;
    window.setup.eyesColorInput.value = wizardEyesColor.style.fill;
    window.similar.eyesColor = randomEyesColor;
    window.similar.updateWizards();
  });

  setupFireBallWrap.addEventListener('click', function () {
    var randomColor = window.util.getRandomElement(FIREBALLS);

    setupFireBallWrap.style.background = randomColor;
    window.setup.fireballColorInput.value = randomColor;
  });

  var collectWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  var renderWizards = function (data) {
    var takeNumber = data.length > MAX_WIZARD_SIMILAR ? MAX_WIZARD_SIMILAR : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(collectWizard(data[i]));
    }

    similar.classList.remove('hidden');
  };

  window.wizard = {
    collectWizard: collectWizard,
    renderWizards: renderWizards,
    similarList: similarList,
    MAX_WIZARD_SIMILAR: MAX_WIZARD_SIMILAR,
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };
})();

