'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARDS_SIMILAR = 4;

var fragment = document.createDocumentFragment();

var createWizard = function () {
  var randomWizardNameIndex = Math.floor(Math.random() * WIZARDS_NAMES.length);
  var randomWizardSurnameIndex = Math.floor(Math.random() * WIZARDS_SURNAMES.length);
  var randomWizardCoatColorIndex = Math.floor(Math.random() * WIZARDS_COAT_COLOR.length);
  var randomWizardEyesColorIndex = Math.floor(Math.random() * WIZARDS_EYES_COLOR.length);

  var wizard = {
    name: WIZARDS_NAMES[randomWizardNameIndex] + [' '] + WIZARDS_SURNAMES[randomWizardSurnameIndex],
    coatColor: WIZARDS_COAT_COLOR[randomWizardCoatColorIndex],
    eyesColor: WIZARDS_EYES_COLOR[randomWizardEyesColorIndex]
  };

  return wizard;
};

var createWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_SIMILAR; i++) {
    wizards.push(createWizard());
  }

  return wizards;
};

var newWizards = createWizards();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  fragment.appendChild(wizardElement);
};

for (var i = 0; i < newWizards.length; i++) {
  renderWizard(newWizards[i]);
}

similarListElement.appendChild(fragment);
