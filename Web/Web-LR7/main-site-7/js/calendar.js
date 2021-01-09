(function() {
  var DrawCalendar, allMonth, date, daysOfWeek;

  DrawCalendar = function(year, month) {
    var createdTD, day, dayInMonth, dayInSelectedMonth, i, j, lastDayOfWeek, spacesDay, startDay, thisDayInMonth;
    dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    lastDayOfWeek = 1;
    thisDayInMonth = month;
    startDay = new Date(year, month, 1).getDay();
    // день с которого начинается месяц
    spacesDay = startDay - 1 === -1 ? 6 : startDay - 1;
    dayInSelectedMonth = void 0;
    if (thisDayInMonth === 1 && year % 4 === 0) {
      dayInSelectedMonth = dayInMonth[thisDayInMonth] + spacesDay + 2;
    } else {
      dayInSelectedMonth = dayInMonth[thisDayInMonth] + spacesDay + 1;
    }
    // Очищаем календарь
    $('#days').children().remove();
    // Формируем календарь
    $('#days').append('<table><tr class="not-hover"><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td> <td>Sun</td></tr> <tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr></table>');
    i = 0;
    while (i < 6) {
      j = lastDayOfWeek;
      while (j < dayInSelectedMonth) {
        lastDayOfWeek = j + 1;
        day = j - spacesDay;
        createdTD = $('<td>' + (spacesDay + 1 > j ? '' : day) + '</td>');
        if (day === date.getDate() && month === date.getMonth() && year === date.getFullYear()) {
          createdTD.addClass('active');
        }
        if (spacesDay + 1 > j) {
          createdTD.addClass('not-hover');
        } else {
          createdTD.addClass('clicked');
        }
        $('#days tr').eq(i + 1).append(createdTD);
        if (j % 7 === 0 && j !== 0) {
          break;
        }
        j++;
      }
      i++;
    }
    $('.clicked').on('click', function() {
      var month;
      var year;
      day = $(this).text();
      month = $('#selectMonth')[0].selectedIndex + 1;
      year = $('#selectYear').val();
      if (day < 10) {
        (day = '0' + day);
      } else {
        day;
      }
      if (month < 10) {
        (month = '0' + month);
      } else {
        month;
      }
      if (year < 10) {
        (year = '0' + year);
      } else {
        year;
      }
      $('#birthday').val(day + '.' + month + '.' + year);
      $('#calendar').removeClass('active');
    });
  };

  $('#birthday').on('click', function() {
    $('#calendar').toggleClass('active');
  });

  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  allMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];

  date = new Date();

  $(document).ready(function() {
    $('#selectYear, #selectMonth').on('change', function() {
      DrawCalendar($('#selectYear').val(), $('#selectMonth')[0].selectedIndex);
    });
    $('#today_day_of_week').on('click', function() {
      DrawCalendar(date.getFullYear(), date.getMonth());
      $('#selectMonth')[0].selectedIndex = date.getMonth();
      $('#selectYear').val(date.getFullYear());
    });
    DrawCalendar(date.getFullYear(), date.getMonth());
    $('#selectMonth')[0].selectedIndex = date.getMonth();
    $('#selectYear').val(date.getFullYear());
    $('#today_day_of_week').html(daysOfWeek[date.getDay() - 1] + ' ' + date.getDate());
  });

}).call(this);
