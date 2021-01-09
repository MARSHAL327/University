month = [
  'ЯНВАРЯ'
  'ФЕВРАЛЯ'
  'МАРТА'
  'АПРЕЛЯ'
  'МАЯ'
  'ИЮНЯ'
  'ИЮЛЯ'
  'АВГУСТА'
  'СЕНТЯБРЯ'
  'ОКТЯБРЯ'
  'НОЯБРЯ'
  'ДЕКАБРЯ'
]
timerId = setInterval((->
  date = new Date
  h = date.getHours()
  m = date.getMinutes()
  s = date.getSeconds()
  d = date.getDay()
  s++
  if s >= 60
    s = 0
    m++
  if m >= 60
    m = 0
    h++
  if h >= 24
    h = 0
  if s < 10 then (s = '0' + s) else s
  if m < 10 then (m = '0' + m) else m
  if h < 10 then (h = '0' + h) else h
  node.innerHTML = h + ':' + m + ':' + s + '<br>' + ' ' + d + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' ' + getRussianWeek(d)
  return
), 1000)
#время и дата

getRussianWeek = (day) ->
  switch day
    when 0
      return 'ВОСКРЕСЕНЬЕ'
    when 1
      return 'ПОНЕДЕЛЬНИК'
    when 2
      return 'ВТОРНИК'
    when 3
      return 'СРЕДА'
    when 4
      return 'ЧЕТВЕРГ'
    when 5
      return 'ПЯТНИЦА'
    when 6
      return 'СУББОТА'
  return