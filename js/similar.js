'use strict';
(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var WIZARDS_SIMILAR = 4;

  var fragment = document.createDocumentFragment();

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
      name: window.util.randomSelection(WIZARDS_NAMES) + [' '] + window.util.randomSelection(WIZARDS_SURNAMES),
      coatColor: window.util.randomSelection(window.util.wizardCoatColorList),
      eyesColor: window.util.randomSelection(window.util.wizardEyesColorList)
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
})();

