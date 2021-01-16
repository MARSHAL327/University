InitMenu = ->
  menuItems = document.querySelector('.top_menu')
  menuItems = menuItems.querySelectorAll('a')
  if document.title != 'Фотоальбом'
    subMenu = document.createElement('ul')
    subMenu.classList.add 'subMenu'
    subMenu.style.display = 'none'
    menuItems[2].querySelector('li').appendChild subMenu
    temp = [
      'interests.html#art1'
      'interests.html#art2'
      'interests.html#art3'
    ]
    text = [
      'Хобби'
      'Фильмы'
      'Музыка'
    ]
    i = 0
    while i < temp.length
      a = document.createElement('a')
      li = document.createElement('li')
      li.innerText = text[i]
      a.appendChild li
      a.href = temp[i]
      subMenu.appendChild a
      i++
    menuItems[2].addEventListener 'mouseover', (->
      subMenu.style.display = 'block'
      return
    ), true
    menuItems[2].addEventListener 'mouseout', (->
      subMenu.style.display = 'none'
      return
    ), true
    subMenu.querySelectorAll('a').forEach ->
      console.log document.title + ' ' + element.innerText
      console.log document.title == element.innerText
      if document.title == element.innerText
        element.style.backgroundColor = 'green'
  return