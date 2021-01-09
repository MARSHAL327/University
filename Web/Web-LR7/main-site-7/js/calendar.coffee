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
  $('#days').children().remove()
  # Формируем календарь
  $('#days').append '<table><tr class="not-hover"><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td> <td>Sun</td></tr> <tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr></table>'
  
  i = 0
  while i < 6
    j = lastDayOfWeek

    while j < dayInSelectedMonth
      lastDayOfWeek = j + 1
      day = j - spacesDay
      createdTD = $('<td>' + (if spacesDay + 1 > j then '' else day) + '</td>')

      if day == date.getDate() and month == date.getMonth() and year == date.getFullYear()
        createdTD.addClass 'active'
      if spacesDay + 1 > j
        createdTD.addClass 'not-hover'
      else
        createdTD.addClass 'clicked'

      $('#days tr').eq(i + 1).append createdTD

      if j % 7 == 0 and j != 0
        break
      j++
    i++

  $('.clicked').on 'click', ->
    `var month`
    `var year`

    day = $(this).text()
    month = $('#selectMonth')[0].selectedIndex + 1
    year = $('#selectYear').val()

    if day < 10 then (day = '0' + day) else day
    if month < 10 then (month = '0' + month) else month
    if year < 10 then (year = '0' + year) else year

    $('#birthday').val day + '.' + month + '.' + year
    $('#calendar').removeClass 'active'

    return
  return

$('#birthday').on 'click', ->
  $('#calendar').toggleClass 'active'
  return

daysOfWeek = [
  'Monday'
  'Tuesday'
  'Wednesday'
  'Thursday'
  'Friday'
  'Saturday'
  'Sunday'
]
allMonth = [
  'January'
  'February'
  'March'
  'April'
  'May'
  'June'
  'Jule'
  'August'
  'September'
  'October'
  'November'
  'December'
]

date = new Date

$(document).ready ->
  $('#selectYear, #selectMonth').on 'change', ->
    DrawCalendar $('#selectYear').val(), $('#selectMonth')[0].selectedIndex
    return

  $('#today_day_of_week').on 'click', ->
    DrawCalendar date.getFullYear(), date.getMonth()
    $('#selectMonth')[0].selectedIndex = date.getMonth()
    $('#selectYear').val date.getFullYear()
    return

  DrawCalendar date.getFullYear(), date.getMonth()

  $('#selectMonth')[0].selectedIndex = date.getMonth()
  $('#selectYear').val date.getFullYear()
  $('#today_day_of_week').html daysOfWeek[date.getDay() - 1] + ' ' + date.getDate()
  return