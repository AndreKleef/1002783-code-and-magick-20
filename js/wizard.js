'use strict';
(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var MAX_WIZARD_SIMILAR = 4;

  /**
  * @author Andrew Slivka <kleef001@gmail.com>
  *
  * @description
  *    Функция клонирует из документа шаблон на волшебника и подставляет каждому соответствующие значения
  *
  * @param {string} wizard - один волшебник выведенный в DOM.
  *
  * @returns {void}
  */

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.wizard = {
    WIZARDS_COAT_COLOR: WIZARDS_COAT_COLOR,
    WIZARDS_EYES_COLOR: WIZARDS_EYES_COLOR,
    renderWizard: renderWizard,
    similarListElement: similarListElement,
    MAX_WIZARD_SIMILAR: MAX_WIZARD_SIMILAR
  };
})();

