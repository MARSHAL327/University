DrawCalendar = (year, month) ->
  dayInMonth = [
    31
    28
    31
    30
    31
    30
    31
    31
    30
    31
    30
    31
  ]
  lastDayOfWeek = 1
  thisDayInMonth = month
  startDay = new Date(year, month, 1).getDay()
  # день с которого начинается месяц
  spacesDay = if startDay - 1 == -1 then 6 else startDay - 1
  dayInSelectedMonth = undefined
  if thisDayInMonth == 1 and year % 4 == 0
    dayInSelectedMonth = dayInMonth[thisDayInMonth] + spacesDay + 2
  else
    dayInSelectedMonth = dayInMonth[thisDayInMonth] + spacesDay + 1
  # Очищаем календарь
  days.children[0].remove()
  days.insertAdjacentHTML 'beforeend', '<table><tr class="not-hover"><td>ПН</td><td>ВТ</td><td>СР</td><td>ЧТ</td><td>ПТ</td><td>СБ</td><td>ВС</td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr></table>'
  # Формируем календарь
  i = 0
  while i < 6
    j = lastDayOfWeek
    while j < dayInSelectedMonth
      lastDayOfWeek = j + 1
      day = j - spacesDay
      classes = ''
      if day == date.getDate() and month == date.getMonth() and year == date.getFullYear()
        classes += 'active'
      if spacesDay + 1 > j
        classes += ' not-hover'
      else
        classes += ' clicked'
      days.children[0].children[0].children[i + 1].insertAdjacentHTML 'beforeend', '<td class=\'' + classes + '\'>' + (if spacesDay + 1 > j then '' else day)
      if j % 7 == 0 and j != 0
        break
      j++
    i++
  # Если кликунли на дату
  clickDate = document.getElementsByClassName('clicked')
  i = 0
  while i < clickDate.length
    clickDate[i].addEventListener 'click', ->
      `var day`
      day = @innerHTML
      month = selectMonth.options.selectedIndex + 1
      year = selectYear.value
      if day < 10 then (day = '0' + day) else day
      if month < 10 then (month = '0' + month) else month
      if year < 10 then (year = '0' + year) else year
      birthday.value = day + '.' + month + '.' + year
      calendar.style.display = if calendar.style.display == 'block' then 'none' else 'block'
      return
    i++
  return

birthday.addEventListener 'click', ->
  calendar.style.display = if calendar.style.display == 'block' then 'none' else 'block'
  return
daysOfWeek = [
  'ПОНЕДЕЛЬНИК'
  'ВТОРНИК'
  'СРЕДА'
  'ЧЕТВЕРГ'
  'ПЯТНИЦА'
  'СУББОТА'
  'ВОСКРЕСЕНЬЕ'
]
allMonth = [
  'ЯНВАРЬ'
  'ФЕВРАЛЬ'
  'МАРТ'
  'АПРЕЛЬ'
  'МАЙ'
  'ИЮНЬ'
  'ИЮЛЬ'
  'АВГУСТ'
  'СЕНТЯБРЬ'
  'ОКТЯБРЬ'
  'НОЯБРЬ'
  'ДЕКАБРЬ'
]
date = new Date
selectMonth.addEventListener 'change', ->
  DrawCalendar selectYear.value, selectMonth.options.selectedIndex
  return
selectYear.addEventListener 'change', ->
  DrawCalendar selectYear.value, selectMonth.options.selectedIndex
  return
today_day_of_week.addEventListener 'click', ->
  DrawCalendar date.getFullYear(), date.getMonth()
  selectMonth.options.selectedIndex = date.getMonth()
  selectYear.value = date.getFullYear()
  return
DrawCalendar date.getFullYear(), date.getMonth()
selectMonth.options.selectedIndex = date.getMonth()
selectYear.value = date.getFullYear()
today_day_of_week.innerHTML = daysOfWeek[date.getDay() - 1] + ' ' + date.getDate()
