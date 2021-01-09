(function() {
  var valid_test;

  valid_test = function() {
    var fio, i, space, what;
    fio = document.test.fio.value;
    if (fio === '') {
      window.alert('Пожалуйста, введите ФИО.');
      document.test.fio.focus();
      return false;
    }
    i = void 0;
    space = 0;
    i = 1;
    while (i < fio.length) {
      if (fio[i] === ' ' && fio[i - 1] !== ' ') {
        space++;
      }
      i++;
    }
    if (space !== 2) {
      window.alert('Введено некорректное значение поля ФИО.');
      document.test.fio.focus();
      return false;
    }
    if (document.test.one.value === '') {
      window.alert('Пожалуйста, ответьте на первый вопрос.');
      document.test.one[0].focus();
      return false;
    }
    if (document.test.two.value === '') {
      window.alert('Пожалуйста, ответьте на второй.');
      document.test.two[0].focus();
      return false;
    }
    if (document.test.three.value === '') {
      window.alert('Пожалуйста, на последний вопрос.');
      document.test.three.focus();
      return false;
    }
    what = document.test.three.value;
    if (what.split(' ').filter((function(item) {
      return item !== '';
    })).length > 30) {
      window.alert('В ответе  не более 30 слов. Пожалуйста, повторите ввод.');
      document.test.three.focus();
      return false;
    }
  };

  today_day_of_week.innerHTML = daysOfWeek[date.getDay() - 1] + ' ' + date.getDate();

}).call(this);
