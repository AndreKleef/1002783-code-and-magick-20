'use strict';

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

/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*   Функция возвращает одного волшебника, который содержит свойства, каждый из которых имеет рандомные значения,
*   взятые из соответствующего массива.
*
* @property {string} name - Имя
* @property {string} coatColor - Цвет мантии
* @property {string} eyesColor - Цвет глаз
*
* @return {object} - волшебник с рандомными значениями
*/
var createWizard = function () {
  var wizard = {
    name: getRandomElement(WIZARDS_NAMES) + [' '] + getRandomElement(WIZARDS_SURNAMES),
    coatColor: getRandomElement(WIZARDS_COAT_COLOR),
    eyesColor: getRandomElement(WIZARDS_EYES_COLOR)
  };

  return wizard;
};

/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*   Функция возвращает волшебников, количество которых указаны в переменной WIZARDS_SIMILAR,
*   добавляя каждый раз в массив нового из объекта вызываемой функции
*
* @property {array<object>} wizards - волшебники
* @property {object} createWizard - волшебник с рандомным значением
*
*
* @return {array<object>} - волшебники с рандомными значениями
*/
var createWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_SIMILAR; i++) {
    wizards.push(createWizard());
  }

  return wizards;
};


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

var setupOpen = document.querySelector('.setup-open-icon');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');

var wizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
var setupFireBallWrap = document.querySelector('.setup-fireball-wrap');

var FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', 'e6e848'];

/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*  Функция обработчик которая вызывается каждый раз когда была нажата клавиша Escape.
*  Работает в течение всего жизненного цикла приложения.
*
* @param {KeyboardEvent} evt - клавиатурное событие
*
* @returns {void}
*/
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

/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*  Функция обработчик которая открывает окно формы каждый раз. когда нажимается соответствующая клавиша
*  на клавиатуре и кликание левой кнопкой мыши
*
* @return {void}
*/
var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};
/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*  Функция обработчик которая закрывает окно формы каждый раз. когда нажимается соответствующая клавиша
*  на клавиатуре и кликание левой кнопкой мыши
*
* @return {void}
*/
var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*  Функция обработчик закрывает окно формы каждый раз когда была нажата левая кнопка мыши на иконку пользователя.
*  Работает в течение всего жизненного цикла приложения.
*
* @param {KeyboardEvent} evt - клавиатурное событие
*
* @returns {void}
*/
setupOpen.addEventListener('click', function () {
  openPopup();
});

/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*  Функция обработчик открывает окно формы каждый раз когда была нажата клавиша Enter.
*  Работает в течение всего жизненного цикла приложения.
*
* @param {KeyboardEvent} evt - клавиатурное событие
*
* @returns {void}
*/
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*  Функция обработчик закрывает окно формы каждый раз когда была нажата левая кнопка мыши на крестик.
*  Работает в течение всего жизненного цикла приложения.
*
* @param {KeyboardEvent} evt - клавиатурное событие
*
* @returns {void}
*/
setupClose.addEventListener('click', function () {
  closePopup();
});

/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*  Функция обработчик закрывает окно формы каждый раз когда была нажата клавиша Enter.
*  Работает в течение всего жизненного цикла приложения.
*
* @param {KeyboardEvent} evt - клавиатурное событие
*
* @returns {void}
*/
setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*   Функция проверяет заполнено ли поле ввода в форме или нет
*
* @return {void}
*/
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

/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*   Функция обработчик которая при каждом клике на мантию волшебника меняет ее цвет на рандомный, взятый из массива цвета мантий волшебников
*
* @return {void}
*/
wizardCoatColor.addEventListener('click', function () {
  var randomCoatColor = getRandomElement(WIZARDS_COAT_COLOR);

  wizardCoatColor.style.fill = randomCoatColor;
  coatColorInput.value = wizardCoatColor.style.fill;
});

/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*   Функция обработчик которая при каждом клике на глаза волшебника меняет их цвет на рандомный, взятый из массива цвета глаз волшеников
*
* @return {void}
*/
wizardEyesColor.addEventListener('click', function () {
  var randomEyesColor = getRandomElement(WIZARDS_EYES_COLOR);

  wizardEyesColor.style.fill = randomEyesColor;
  eyesColorInput.value = wizardEyesColor.style.fill;
});

/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*   Функция обработчик которая при каждом клике на файрбол меняет его цвет на рандомный, взятый из массива цвета файрбола
*
* @return {void}
*/
setupFireBallWrap.addEventListener('click', function () {
  var randomColor = getRandomElement(FIREBALLS);

  setupFireBallWrap.style.background = randomColor;
  fireballColorInput.value = randomColor;
});
/**
* @author Andrew Slivka <kleef001@gmail.com>
*
* @description
*   Функция обработчик которая проверяет при вводе поля формы количество символов,
*   правильный ввод от 2 символов до 25 символов
*
* @return {void}
*/
userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;
  var customValidityInput = userNameInput.setCustomValidity;

  if (valueLength < MIN_NAME_LENGTH) {
    customValidityInput('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    customValidityInput('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    customValidityInput('');
  }
});
