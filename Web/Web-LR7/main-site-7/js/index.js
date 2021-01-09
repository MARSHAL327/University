(function() {
  // ============Подменю============
  // ============Мои интересы============
  var drawHistoryTable, drawTime, generateSection, hideSubMenu, month, russianMonthName, saveGlobalHistory, saveThisHistory, showSubMenu, timerId;

  generateSection = function(object) {
    switch (object.type) {
      case 'section':
        document.write('<div id="' + object.id + '" class="parallax-wrapper"><div class="parallax-img" style="background: url(' + object.bgUrl + ') no-repeat fixed;"></div><div class="parallax"><div class="parallax-title">' + object.title + '</div><hr class="parallax-hr"><div class="parallax-content">' + object.text + '</div></div></div>');
        break;
      case 'link':
        document.write('<a href="#' + object.id + '"><li>' + object.title + '</li></a>');
    }
  };

  showSubMenu = function(e) {
    if ($(this).children().length > 1) {
      $(this).find('.sub-menu').css('display', 'grid');
    } else {
      return false;
    }
  };

  hideSubMenu = function(e) {
    if ($(this).children().length > 1) {
      $(this).find('.sub-menu').css('display', 'none');
    } else {
      return false;
    }
  };

  drawTime = function() {
    var date, h, m, s;
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
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
    time.innerHTML = h + ':' + m + ':' + s + ' ' + date.getDay() + ' ' + russianMonthName[date.getMonth()] + ' ' + date.getFullYear();
  };

  // =================История просмотра================
  saveThisHistory = function(pathname) {
    var thisHistory;
    if (sessionStorage.getItem('thisHistory') === null) {
      thisHistory = {};
      sessionStorage.setItem('thisHistory', JSON.stringify(thisHistory));
    }
    thisHistory = JSON.parse(sessionStorage.getItem('thisHistory'));
    if (thisHistory[pathname] === void 0) {
      (thisHistory[pathname] = 1);
    } else {
      thisHistory[pathname]++;
    }
    sessionStorage.setItem('thisHistory', JSON.stringify(thisHistory));
  };

  saveGlobalHistory = function(pathname) {
    var globalHistory;
    if (localStorage.getItem('globalHistory') === null) {
      globalHistory = {};
      localStorage.setItem('globalHistory', JSON.stringify(globalHistory));
    }
    globalHistory = JSON.parse(localStorage.getItem('globalHistory'));
    if (globalHistory[pathname] === void 0) {
      (globalHistory[pathname] = 1);
    } else {
      globalHistory[pathname]++;
    }
    localStorage.setItem('globalHistory', JSON.stringify(globalHistory));
  };

  // Рисуем таблицу для истории
  drawHistoryTable = function() {
    $('#menu li').each(function() {
      var link, linkSrc;
      link = $(this).children().first();
      linkSrc = link.attr('href');
      $('#history_table').children()[0].insertAdjacentHTML('afterend', '<tr><td>' + link.text() + '</td><td>' + thisHistory[linkSrc] || '0' + '</td><td>' + globalHistory[linkSrc] || '0' + '</td></tr>');
    });
  };

  $('.menu-item').on('mouseenter', showSubMenu);

  $('.menu-item').on('mouseleave', hideSubMenu);

  // ============Время============
  month = '';

  russianMonthName = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

  timerId = setInterval((function() {
    drawTime();
  }), 1000);

  $(document).ready(function() {
    var globalHistory, pathname, thisHistory;
    thisHistory = void 0;
    globalHistory = void 0;
    pathname = document.location.pathname;
    // адрес текущей страницы
    pathname = pathname.slice(pathname.lastIndexOf('/') + 1, pathname.length);
    drawTime();
    saveThisHistory(pathname);
    saveGlobalHistory(pathname);
    if (pathname === 'history.html') {
      drawHistoryTable();
    }
    $('#menu li').each(function() {
      var thisURL;
      thisURL = $(this).children().first();
      if (thisURL.attr('href') === pathname) {
        thisURL.addClass('active');
      }
    });
  });

}).call(this);
