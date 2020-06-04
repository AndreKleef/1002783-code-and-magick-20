'use strict';

var CLOUD_WIDTH = 420; // ширина облака
var CLOUD_HEIGHT = 270; // высота облака

var CLOUD_X = 100; // координаты по оси Х
var CLOUD_Y = 10; // координаты по оси У
var DISTANCE = 50; // отступ между колонками
var GAP = 20; // отступ
var FONT_GAP = 16; // размер шрифта
// var TEXT_WIDTH = 50; // ширина текста
var BAR_WIDTH = 40; // ширина колонки

var barHeight = CLOUD_HEIGHT - CLOUD_Y - GAP - FONT_GAP - FONT_GAP - 50 - GAP; // высота колонки

var renderCloud = function (context, x, y, color) {
  context.fillStyle = color;
  context.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 2);

  var maxTime = getMaxElement(times);

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getRandomInRange(1, 100);

  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + DISTANCE + (DISTANCE + BAR_WIDTH) * i, CLOUD_HEIGHT - ((barHeight * times[i]) / maxTime) - 50);
    ctx.fillText(players[i], CLOUD_X + DISTANCE + (DISTANCE + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - CLOUD_Y);
    if (player === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(230, 100%,' + getRandomInRange(1, 100) + '%)';
    }
    ctx.fillRect(CLOUD_X + DISTANCE + (BAR_WIDTH + DISTANCE) * i, CLOUD_HEIGHT - ((barHeight * times[i]) / maxTime) - FONT_GAP * 2, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }
};
