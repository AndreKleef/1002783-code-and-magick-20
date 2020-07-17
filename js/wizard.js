'use strict';
(function () {

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var MAX_WIZARD_SIMILAR = 4;

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
    MAX_WIZARD_SIMILAR: MAX_WIZARD_SIMILAR
  };
})();

