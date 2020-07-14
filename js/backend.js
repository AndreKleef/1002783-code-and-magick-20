'use strict';
(function () {
  var URL_LOAD = 'https://javascript.pages.academy/code-and-magick/data';
  var URL_UPLOAD = 'https://javascript.pages.academy/code-and-magick';

  var statusCode = {
    OK: 200
  };
  var REQUEST_TIMEOUT_IN_MS = 5000;

  var createXhr = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === statusCode.OK) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = REQUEST_TIMEOUT_IN_MS;

    return xhr;
  };

  var load = function (onSuccess, onError) {
    var xhr = createXhr(onSuccess, onError);

    xhr.open('GET', URL_LOAD);
    xhr.send();
  };

  var upload = function (data, onSuccess, onError) {
    var xhr = createXhr(onSuccess, onError);

    xhr.open('POST', URL_UPLOAD);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    upload: upload
  };
})();
