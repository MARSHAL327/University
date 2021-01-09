# проверка поля на пустоту

checkInput = (inputValue) ->
  if inputValue.trim() == '' then true else false

errors = {}

showInputError = (input, errorMessage) ->
  if checkInput(input.val())
    showError input, errorMessage
    errors.input = true
  else
    hideError input
    delete errors.input
  return

# =======проверка ФИО=======

checkFio = (fio) ->
  if checkInput(fio.val()) or fio.val().trim().split(' ').length != 3
    showError fio, 'ФИО неверно'
    errors.fio = true
  else
    hideError fio
    delete errors.fio
  return

# =======проверка телефона=======

checkPhone = (phone) ->
  if checkInput(phone.val())
    showError phone, 'Заполните поле телефон!'
    errors.phone = true
  else if phone.val().substr(0, 2) != '+3' and phone.val().substr(0, 2) != '+7'
    showError phone, 'Неверный код страны'
    errors.phone = true
  else if phone.val().length - 1 < 10 or phone.val().length - 1 > 12
    showError phone, 'Неверная длина телефона'
    errors.phone = true
  else if isNaN(phone.val().substr(2, 11))
    showError phone, 'Вводить можно только цифры'
    errors.phone = true
  else if phone.val().substr(2, 11).includes(' ')
    showError phone, 'Нельзя вводить пробелы'
    errors.phone = true
  else
    hideError phone
    delete errors.phone
  return

# =======показываем ошибку=======

showError = (field, errorMessage) ->
  errorText = field.next()
  errorText.css 'display', 'block'
  field.css 'borderColor', '#D32F2F'
  errorText.html errorMessage
  field.focus()
  return

# =======скрываем ошибку=======

hideError = (field) ->
  errorText = field.next()
  field.css 'borderColor', 'green'
  errorText.css 'display', 'none'
  return

# =======скрываем все ошибки=======

hideAllError = ->
  $('.contact-form input, .contact-form select, .contact-form textarea').each ->
    hideError $(this)
    $(this).css 'borderColor', 'black'
    return
  return

# =======проверяем первый вопрос из теста=======

check_q_1 = (q_1) ->
  q_value = q_1.val()
  hideError q_1
  if checkInput(q_value)
    showError q_1, 'Заполните поле'
    errors.q_1 = true
  else if q_value.split(' ').filter(((item) ->
      item != ''
      return
    )).length < 30
    showError q_1, 'Нужно минимум 30 слов'
    delete errors.q_1
  return

# =======проверяем форму теста =======

checkTestForm = ->
  q_1 = $('#q_1')
  fio = $('#fio')
  check_q_1 q_1
  checkFio fio
  if Object.keys(errors).length == 0
    $('.contact-form')[0].submit()
  return

# =======МОДАЛЬНОЕ ОКНО=======

showModal = (modalText, btnCallback) ->
  $('.modal-wrapper').addClass 'active'
  $('.modal-wrapper p').text modalText
  $('#yes_modal').on 'click', btnCallback
  return

hideModal = ->
  $('.modal-wrapper').removeClass 'active'
  $('#yes_modal').off 'click'
  return

resetForm = ->
  $('.contact-form')[0].reset()
  hideAllError()
  return

# =======проверяем форму целиком=======

sendForm = ->
  fio = $('#fio')
  phone = $('#phone')
  email = $('#email')
  message = $('#message')
  birthday = $('#birthday')
  
  checkFio fio
  showInputError birthday, birthday.attr('data-error-text')
  showInputError email, email.attr('data-error-text')
  showInputError message, message.attr('data-error-text')
  checkPhone phone

  if Object.keys(errors).length == 0
    $('.contact-form')[0].submit()
  return

$('input, select, textarea').on 'change', ->
  showInputError $(this), $(this).attr('data-error-text')
  return

$('#fio').on 'change', ->
  checkFio $(this)
  return

$('#phone').on 'change', ->
  checkPhone $(this)
  return

$('#q_1').on 'change', ->
  check_q_1 $(this)
  return

$('.btn-show-modal').on 'click', ->
  modalText = $(this).attr('data-modal-text')
  callback = $(this).attr('data-btn-callback')
  showModal modalText, eval(callback)
  return

$('.modal-btns button, .overlay').on 'click', ->
  hideModal()
  return

$('.tooltip').on 'mouseenter', ->
  $(this).find('.tooltip-block').text $(this).attr('data-tooltip-text')
  $(this).find('.tooltip-block').addClass 'active'
  return

$('.tooltip').on 'mouseleave', ->
  setTimeout (->
    $(this).find('.tooltip-block').removeClass 'active'
    return
  ), 1000
  return