(function() {
  var getRussianWeek, month, timerId;

  month = ['ЯНВАРЯ', 'ФЕВРАЛЯ', 'МАРТА', 'АПРЕЛЯ', 'МАЯ', 'ИЮНЯ', 'ИЮЛЯ', 'АВГУСТА', 'СЕНТЯБРЯ', 'ОКТЯБРЯ', 'НОЯБРЯ', 'ДЕКАБРЯ'];

  timerId = setInterval((function() {
    var d, date, h, m, s;
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    d = date.getDay();
    s++;
    if (s >= 60) {
      s = 0;
      m++;
    }
    if (m >= 60) {
      m = 0;
      h++;
    }
    if (h >= 24) {
      h = 0;
    }
    if (s < 10) {
      (s = '0' + s);
    } else {
      s;
    }
    if (m < 10) {
      (m = '0' + m);
    } else {
      m;
    }
    if (h < 10) {
      (h = '0' + h);
    } else {
      h;
    }
    node.innerHTML = h + ':' + m + ':' + s + '<br>' + ' ' + d + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' ' + getRussianWeek(d);
  }), 1000);

  //время и дата
  getRussianWeek = function(day) {
    switch (day) {
      case 0:
        return 'ВОСКРЕСЕНЬЕ';
      case 1:
        return 'ПОНЕДЕЛЬНИК';
      case 2:
        return 'ВТОРНИК';
      case 3:
        return 'СРЕДА';
      case 4:
        return 'ЧЕТВЕРГ';
      case 5:
        return 'ПЯТНИЦА';
      case 6:
        return 'СУББОТА';
    }
  };

}).call(this);
