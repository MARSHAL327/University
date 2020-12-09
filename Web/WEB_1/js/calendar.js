birthday.addEventListener("click", function() {
  calendar.style.display = calendar.style.display == "block" ? "none" : "block";
});

daysOfWeek = ["ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА", "ВОСКРЕСЕНЬЕ"];
allMonth = ["ЯНВАРЬ", "ФЕВРАЛЬ", "МАРТ", "АПРЕЛЬ", "МАЙ", "ИЮНЬ", "ИЮЛЬ", "АВГУСТ", "СЕНТЯБРЬ", "ОКТЯБРЬ", "НОЯБРЬ", "ДЕКАБРЬ"]

let date = new Date();

function DrawCalendar(year, month) {
  let dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let lastDayOfWeek = 1;
  thisDayInMonth = month;

  let startDay = new Date(year, month, 1).getDay(); // день с которого начинается месяц
  let spacesDay = startDay - 1 == -1 ? 6 : startDay - 1;

  let dayInSelectedMonth;

  if( thisDayInMonth == 1 && year % 4 == 0 ){
    dayInSelectedMonth = dayInMonth[thisDayInMonth] + spacesDay + 2;
  } else {
    dayInSelectedMonth = dayInMonth[thisDayInMonth] + spacesDay + 1;
  }

  // Очищаем календарь
  days.children[0].remove();

  days.insertAdjacentHTML("beforeend", `
  <table>
  <tr class="not-hover">
    <td>ПН</td>
    <td>ВТ</td>
    <td>СР</td>
    <td>ЧТ</td>
    <td>ПТ</td>
    <td>СБ</td>
    <td>ВС</td>
  </tr>
  <tr></tr>
  <tr></tr>
  <tr></tr>
  <tr></tr>
  <tr></tr>
  <tr></tr>
  </table>
  `)

  // Формируем календарь
  for (let i = 0; i < 6; i++) {
    for (let j = lastDayOfWeek; j < dayInSelectedMonth; j++) {
      lastDayOfWeek = j + 1;
      day = j - spacesDay;
      let classes = "";

      if( day == date.getDate() && month == date.getMonth() && year == date.getFullYear() ){
        classes += "active";
      }
      if( spacesDay + 1 > j ){
        classes += " not-hover";
      } else {
        classes += " clicked";
      }

      days
      .children[0]
      .children[0]
      .children[i + 1]
      .insertAdjacentHTML("beforeend", "<td class='" + classes + "'>" + (spacesDay + 1 > j ? "" : day));
      if( j % 7 == 0 && j != 0 ) break;
    }
  }

  // Если кликунли на дату
  let clickDate = document.getElementsByClassName("clicked");

  for (var i = 0; i < clickDate.length; i++) {
    clickDate[i].addEventListener("click", function(){
      let day = this.innerHTML,
      month = selectMonth.options.selectedIndex + 1,
      year = selectYear.value;

      day < 10 ? day = "0" + day : day;
      month < 10 ? month = "0" + month : month;
      year < 10 ? year = "0" + year : year;

      birthday.value = day + "."  + month + "." + year;
      calendar.style.display = calendar.style.display == "block" ? "none" : "block";
    })
  }
}

selectMonth.addEventListener("change", () => {
  DrawCalendar(selectYear.value, selectMonth.options.selectedIndex)
})

selectYear.addEventListener("change", () => {
  DrawCalendar(selectYear.value, selectMonth.options.selectedIndex)
})

today_day_of_week.addEventListener("click", () => {
  DrawCalendar(date.getFullYear(), date.getMonth());
  selectMonth.options.selectedIndex = date.getMonth();
  selectYear.value = date.getFullYear();
})

DrawCalendar(date.getFullYear(), date.getMonth());
selectMonth.options.selectedIndex = date.getMonth();
selectYear.value = date.getFullYear();
today_day_of_week.innerHTML = daysOfWeek[date.getDay() - 1] + " " + date.getDate();
