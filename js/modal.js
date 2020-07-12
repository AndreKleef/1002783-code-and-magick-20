'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open-icon');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');

  var startPositionX = 50;
  var startPositionY = 80;

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

  var onPopupEscPress = function (evt) {
    var isEscKeyPressed = window.util.isEscape(evt);

    if (isEscKeyPressed && !window.setup.isSetupInputFocused) {
      closePopup();
    }
    setup.style.top = startPositionY + 'px';
    setup.style.left = startPositionX + '%';
  };

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
  *  Функция обработчик которая закрывает окно формы каждый раз, когда нажимается соответствующая клавиша
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
    window.util.isEnter(evt, closePopup);
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
    setup.style.top = startPositionY + 'px';
    setup.style.left = startPositionX + '%';
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
    var isEnterKeyPressed = window.util.isEnter(evt);

    if (isEnterKeyPressed) {
      closePopup();
    }
    setup.style.top = startPositionY + 'px';
    setup.style.left = startPositionX + '%';
  });

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.wizard.MAX_WIZARD_SIMILAR; i++) {
      fragment.appendChild(window.wizard.renderWizard(wizards[i]));
    }
    window.wizard.similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
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

  var form = document.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.backend.upload(new FormData(form), function () {
      document.classList.add('hidden');
    });

    evt.preventDefault();
  });
})();
