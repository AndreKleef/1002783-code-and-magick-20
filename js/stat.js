'use strict';

var CLOUD_WIDTH = 420; // ширина облака
var CLOUD_HEIGHT = 270; // высота облака
var CLOUD_X = 100; // координаты по оси Х

var CLOUD_Y = 10; // координаты по оси У
var INDENT = 50; // отступ между колонками
var GAP = 20; // отступ

var FONT_SIZE = 16; // размер шрифта
var BAR_WIDTH = 40; // ширина колонки
var barHeight = CLOUD_HEIGHT - CLOUD_Y - (FONT_SIZE * 2) - 50 - (GAP * 2); // высота колонки

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

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 2);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    var INDENT_CANVAS_X_TO_PLAYER = CLOUD_X + INDENT + (INDENT + BAR_WIDTH) * i; // отступ от начала координат X до каждого игрока
    var BAR_HEIGHT_OVERTIME = (barHeight * times[i]) / maxTime; // высота полосы игрока с течением времени
    var player = players[i];
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), INDENT_CANVAS_X_TO_PLAYER, CLOUD_HEIGHT - BAR_HEIGHT_OVERTIME - 50);
    ctx.fillText(players[i], INDENT_CANVAS_X_TO_PLAYER, CLOUD_HEIGHT - FONT_SIZE - CLOUD_Y);
    if (player === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(230, 100%,' + getRandomNumberInRange(1, 100) + '%)';
    }
    ctx.fillRect(INDENT_CANVAS_X_TO_PLAYER, CLOUD_HEIGHT - BAR_HEIGHT_OVERTIME - FONT_SIZE * 2, BAR_WIDTH, BAR_HEIGHT_OVERTIME);
  }
};
