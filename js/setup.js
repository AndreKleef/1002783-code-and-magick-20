'use strict';
(function () {
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  var userNameInput = document.querySelector('.setup-user-name');

  var isSetupInputFocused = false;

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
  // wizardCoatColor.addEventListener('click', function () {
  //   var randomCoatColor = window.util.getRandomElement(window.wizard.WIZARDS_COAT_COLOR);

  //   wizardCoatColor.style.fill = randomCoatColor;
  //   coatColorInput.value = wizardCoatColor.style.fill;
  // });

  /**
  * @author Andrew Slivka <kleef001@gmail.com>
  *
  * @description
  *   Функция обработчик которая при каждом клике на глаза волшебника меняет их цвет на рандомный, взятый из массива цвета глаз волшеников
  *
  * @return {void}
  */
  // wizardEyesColor.addEventListener('click', function () {
  //   var randomEyesColor = window.util.getRandomElement(window.wizard.WIZARDS_EYES_COLOR);

  //   wizardEyesColor.style.fill = randomEyesColor;
  //   eyesColorInput.value = wizardEyesColor.style.fill;
  // });

  /**
  * @author Andrew Slivka <kleef001@gmail.com>
  *
  * @description
  *   Функция обработчик которая при каждом клике на файрбол меняет его цвет на рандомный, взятый из массива цвета файрбола
  *
  * @return {void}
  */
  // setupFireBallWrap.addEventListener('click', function () {
  //   var randomColor = window.util.getRandomElement(FIREBALLS);

  //   setupFireBallWrap.style.background = randomColor;
  //   fireballColorInput.value = randomColor;
  // });
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

  window.setup = {
    isSetupInputFocused: isSetupInputFocused,
    coatColorInput: coatColorInput,
    eyesColorInput: eyesColorInput,
    fireballColorInput: fireballColorInput
  };
})();
