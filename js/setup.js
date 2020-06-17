'use strict';

// var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARDS_SIMILAR = 4;

var fragment = document.createDocumentFragment();

var getRandomElement = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

var createWizard = function () {
  var wizard = {
    name: getRandomElement(WIZARDS_NAMES) + [' '] + getRandomElement(WIZARDS_SURNAMES),
    coatColor: getRandomElement(WIZARDS_COAT_COLOR),
    eyesColor: getRandomElement(WIZARDS_EYES_COLOR)
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


// ВАЛИДАЦИЯ==========================================================================================


var setupOpen = document.querySelector('.setup-open-icon');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');

var wizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
var setupFireBallWrap = document.querySelector('.setup-fireball-wrap');

var FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var isSetupInputFocused = false;

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && !isSetupInputFocused) {
    evt.preventDefault();
    closePopup();
  }
};

userNameInput.addEventListener('focus', function () {
  isSetupInputFocused = true;
});

userNameInput.addEventListener('blur', function () {
  isSetupInputFocused = false;
});


var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {

  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var coatColorInput = document.querySelector('input[name=coat-color]');
var eyesColorInput = document.querySelector('input[name=eyes-color]');
var fireballColorInput = document.querySelector('input[name=fireball-color]');

wizardCoatColor.addEventListener('click', function () {
  wizardCoatColor.style.fill = getRandomElement(WIZARDS_COAT_COLOR);
  coatColorInput.value = wizardCoatColor.style.fill;
});

wizardEyesColor.addEventListener('click', function () {
  wizardEyesColor.style.fill = getRandomElement(WIZARDS_EYES_COLOR);
  eyesColorInput.value = wizardEyesColor.style.fill;
});

setupFireBallWrap.addEventListener('click', function () {
  var randomColor = getRandomElement(FIREBALLS);

  setupFireBallWrap.style.background = randomColor;
  fireballColorInput.value = randomColor;
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});
