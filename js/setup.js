'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var fragment = document.createDocumentFragment();

var createWizard = function () {
  var randNames = Math.floor(Math.random() * WIZARD_NAMES.length);
  var randSurnames = Math.floor(Math.random() * WIZARD_SURNAMES.length);
  var randCoatColor = Math.floor(Math.random() * WIZARD_COAT_COLOR.length);
  var randEyesColor = Math.floor(Math.random() * WIZARD_EYES_COLOR.length);

  var wizard = {
    name: WIZARD_NAMES[randNames] + [' '] + WIZARD_SURNAMES[randSurnames],
    coatColor: WIZARD_COAT_COLOR[randCoatColor],
    eyesColor: WIZARD_EYES_COLOR[randEyesColor]
  };
  return wizard;
};

var createWizards = function () {
  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards.push(createWizard());
  }
  return wizards;
};

var newWizard = createWizards();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  fragment.appendChild(wizardElement);
};

for (var i = 0; i < newWizard.length; i++) {
  renderWizard(newWizard[i]);
}

similarListElement.appendChild(fragment);
