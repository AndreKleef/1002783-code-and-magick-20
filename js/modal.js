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
    window.util.isEscape(evt, closePopup);
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
    window.util.isEnter(evt, closePopup);
    setup.style.top = startPositionY + 'px';
    setup.style.left = startPositionX + '%';
  });
})();
