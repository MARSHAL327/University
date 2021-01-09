drawActiveImg = (idActiveImg, firstOpen) ->
  if idActiveImg <= 0
    $('.prev-img').addClass 'disabled'
  else
    $('.prev-img').removeClass 'disabled'
  if idActiveImg >= 14
    $('.next-img').addClass 'disabled'
  else
    $('.next-img').removeClass 'disabled'

  srcClickedImg = $('.foto_img[data-img-id=' + idActiveImg + ']').attr('src')
  textClickedImg = $('.foto_img[data-img-id=' + idActiveImg + ']').attr('title')

  $('.num-this-img').text idActiveImg + 1
  if firstOpen
    $('#album_img img').prop 'src', srcClickedImg
    $('#album_img>span').text textClickedImg
  else
    $('#album_img>span').fadeOut()
    $('#album_img img').fadeOut 400, 'swing', (->
      $('#album_img img').prop('src', srcClickedImg).fadeIn()
      $('#album_img>span').text(textClickedImg).fadeIn()
      return
    ), false
    
  return

$(document).ready ->
  $('.total-count').text 15
  $('.next-img').on 'click', (e) ->
    activeImg = $('#album_img').data('active-img')
    $('#album_img').data 'active-img', activeImg + 1
    drawActiveImg activeImg + 1, false
    return

  $('.prev-img').on 'click', (e) ->
    activeImg = $('#album_img').data('active-img')
    drawActiveImg activeImg - 1, false
    $('#album_img').data 'active-img', activeImg - 1
    return

  $(document).on 'click', '.foto_img', (e) ->
    activeImg = $(this).data('img-id')
    $('#album_img').data 'active-img', activeImg
    drawActiveImg activeImg, true
    $('.wrapper_album_img').toggleClass 'active'
    return

  $('#black_bg, .close').on 'click', ->
    $('.wrapper_album_img').toggleClass 'active'
    return

  albumChildrens = $('.content-wrapper').children()

  $(document).on 'click', '.album .move-left', ->
    thieElParent = $(this).parent()
    imgThisEl = thieElParent.find('.foto_img')
    moveEl = albumChildrens.eq(imgThisEl.attr('data-img-id') - 1)
    imgMoveEl = moveEl.find('.foto_img')
    imgMoveEl.attr 'data-img-id', +imgMoveEl.attr('data-img-id') + 1

    moveEl.remove()
    thieElParent.after moveEl
    return

  $(document).on 'click', '.album .move-right', ->
    thieElParent = $(this).parent()
    imgThisEl = thieElParent.find('.foto_img')
    imgThisEl.attr 'data-img-id', +imgThisEl.attr('data-img-id') + 1
    moveEl = albumChildrens.eq(imgThisEl.attr('data-img-id') + 1)
    imgMoveEl = moveEl.find('.foto_img')
    imgMoveEl.attr 'data-img-id', imgMoveEl.attr('data-img-id') - 1

    moveEl.remove()
    thieElParent.before moveEl
    return
  return