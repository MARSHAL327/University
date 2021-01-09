el = document.getElementsByClassName('menu-item')

showSub = ->
  console.log 'ok'
  if @children.length > 1
    @children[1].style.height = 'auto'
    @children[1].style.overflow = 'visible'
    @children[1].style.opacity = '1'
  else
    return false
  return

hideSub = ->
  if @children.length > 1
    @children[1].style.height = '0'
    @children[1].style.overflow = 'hidden'
    @children[1].style.opacity = '0'
  else
    return false
  return

i = 0
while i < el.length
  console.log el[i]
  el[i].addEventListener 'mouseenter', showSub, false
  el[i].addEventListener 'mouseleave', hideSub, false
  i++