# ============Подменю============
# ============Мои интересы============

generateSection = (object) ->
  switch object.type
    when 'section'
      document.write '<div id="' + object.id + '" class="parallax-wrapper"><div class="parallax-img" style="background: url(' + object.bgUrl + ') no-repeat fixed;"></div><div class="parallax"><div class="parallax-title">' + object.title + '</div><hr class="parallax-hr"><div class="parallax-content">' + object.text + '</div></div></div>'
    when 'link'
      document.write '<a href="#' + object.id + '"><li>' + object.title + '</li></a>'
  return

showSubMenu = (e) ->
  if $(this).children().length > 1
    $(this).find('.sub-menu').css 'display', 'grid'
  else
    return false
  return

hideSubMenu = (e) ->
  if $(this).children().length > 1
    $(this).find('.sub-menu').css 'display', 'none'
  else
    return false
  return

drawTime = ->
  date = new Date
  h = date.getHours()
  m = date.getMinutes()
  s = date.getSeconds()
  if s < 10 then (s = '0' + s) else s
  if m < 10 then (m = '0' + m) else m
  if h < 10 then (h = '0' + h) else h
  time.innerHTML = h + ':' + m + ':' + s + ' ' + date.getDay() + ' ' + russianMonthName[date.getMonth()] + ' ' + date.getFullYear()
  return

# =================История просмотра================

saveThisHistory = (pathname) ->
  if sessionStorage.getItem('thisHistory') == null
    thisHistory = {}
    sessionStorage.setItem 'thisHistory', JSON.stringify(thisHistory)
  thisHistory = JSON.parse(sessionStorage.getItem('thisHistory'))
  if thisHistory[pathname] == undefined then (thisHistory[pathname] = 1) else thisHistory[pathname]++
  sessionStorage.setItem 'thisHistory', JSON.stringify(thisHistory)
  return

saveGlobalHistory = (pathname) ->
  if localStorage.getItem('globalHistory') == null
    globalHistory = {}
    localStorage.setItem 'globalHistory', JSON.stringify(globalHistory)
  globalHistory = JSON.parse(localStorage.getItem('globalHistory'))
  if globalHistory[pathname] == undefined then (globalHistory[pathname] = 1) else globalHistory[pathname]++
  localStorage.setItem 'globalHistory', JSON.stringify(globalHistory)
  return

# Рисуем таблицу для истории

drawHistoryTable = ->
  $('#menu li').each ->
    link = $(this).children().first()
    linkSrc = link.attr('href')
    $('#history_table').children()[0].insertAdjacentHTML 'afterend', '<tr><td>' + link.text() + '</td><td>' + thisHistory[linkSrc] or '0' + '</td><td>' + globalHistory[linkSrc] or '0' + '</td></tr>'
    return
  return

$('.menu-item').on 'mouseenter', showSubMenu
$('.menu-item').on 'mouseleave', hideSubMenu
# ============Время============
month = ''
russianMonthName = [
  'январь'
  'февраль'
  'март'
  'апрель'
  'май'
  'июнь'
  'июль'
  'август'
  'сентябрь'
  'октябрь'
  'ноябрь'
  'декабрь'
]
timerId = setInterval((->
  drawTime()
  return
), 1000)
$(document).ready ->
  thisHistory = undefined
  globalHistory = undefined
  pathname = document.location.pathname
  # адрес текущей страницы
  pathname = pathname.slice(pathname.lastIndexOf('/') + 1, pathname.length)
  drawTime()
  saveThisHistory pathname
  saveGlobalHistory pathname
  if pathname == 'history.html'
    drawHistoryTable()
  $('#menu li').each ->
    thisURL = $(this).children().first()
    if thisURL.attr('href') == pathname
      thisURL.addClass 'active'
    return
  return