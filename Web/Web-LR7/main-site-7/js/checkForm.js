(function() {
  // проверка поля на пустоту
  var checkFio, checkInput, checkPhone, checkTestForm, check_q_1, errors, hideAllError, hideError, hideModal, resetForm, sendForm, showError, showInputError, showModal;

  checkInput = function(inputValue) {
    if (inputValue.trim() === '') {
      return true;
    } else {
      return false;
    }
  };

  errors = {};

  showInputError = function(input, errorMessage) {
    if (checkInput(input.val())) {
      showError(input, errorMessage);
      errors.input = true;
    } else {
      hideError(input);
      delete errors.input;
    }
  };

  // =======проверка ФИО=======
  checkFio = function(fio) {
    if (checkInput(fio.val()) || fio.val().trim().split(' ').length !== 3) {
      showError(fio, 'ФИО неверно');
      errors.fio = true;
    } else {
      hideError(fio);
      delete errors.fio;
    }
  };

  // =======проверка телефона=======
  checkPhone = function(phone) {
    if (checkInput(phone.val())) {
      showError(phone, 'Заполните поле телефон!');
      errors.phone = true;
    } else if (phone.val().substr(0, 2) !== '+3' && phone.val().substr(0, 2) !== '+7') {
      showError(phone, 'Неверный код страны');
      errors.phone = true;
    } else if (phone.val().length - 1 < 10 || phone.val().length - 1 > 12) {
      showError(phone, 'Неверная длина телефона');
      errors.phone = true;
    } else if (isNaN(phone.val().substr(2, 11))) {
      showError(phone, 'Вводить можно только цифры');
      errors.phone = true;
    } else if (phone.val().substr(2, 11).includes(' ')) {
      showError(phone, 'Нельзя вводить пробелы');
      errors.phone = true;
    } else {
      hideError(phone);
      delete errors.phone;
    }
  };

  // =======показываем ошибку=======
  showError = function(field, errorMessage) {
    var errorText;
    errorText = field.next();
    errorText.css('display', 'block');
    field.css('borderColor', '#D32F2F');
    errorText.html(errorMessage);
    field.focus();
  };

  // =======скрываем ошибку=======
  hideError = function(field) {
    var errorText;
    errorText = field.next();
    field.css('borderColor', 'green');
    errorText.css('display', 'none');
  };

  // =======скрываем все ошибки=======
  hideAllError = function() {
    $('.contact-form input, .contact-form select, .contact-form textarea').each(function() {
      hideError($(this));
      $(this).css('borderColor', 'black');
    });
  };

  // =======проверяем первый вопрос из теста=======
  check_q_1 = function(q_1) {
    var q_value;
    q_value = q_1.val();
    hideError(q_1);
    if (checkInput(q_value)) {
      showError(q_1, 'Заполните поле');
      errors.q_1 = true;
    } else if (q_value.split(' ').filter((function(item) {
      item !== '';
    })).length < 30) {
      showError(q_1, 'Нужно минимум 30 слов');
      delete errors.q_1;
    }
  };

  // =======проверяем форму теста =======
  checkTestForm = function() {
    var fio, q_1;
    q_1 = $('#q_1');
    fio = $('#fio');
    check_q_1(q_1);
    checkFio(fio);
    if (Object.keys(errors).length === 0) {
      $('.contact-form')[0].submit();
    }
  };

  // =======МОДАЛЬНОЕ ОКНО=======
  showModal = function(modalText, btnCallback) {
    $('.modal-wrapper').addClass('active');
    $('.modal-wrapper p').text(modalText);
    $('#yes_modal').on('click', btnCallback);
  };

  hideModal = function() {
    $('.modal-wrapper').removeClass('active');
    $('#yes_modal').off('click');
  };

  resetForm = function() {
    $('.contact-form')[0].reset();
    hideAllError();
  };

  // =======проверяем форму целиком=======
  sendForm = function() {
    var birthday, email, fio, message, phone;
    fio = $('#fio');
    phone = $('#phone');
    email = $('#email');
    message = $('#message');
    birthday = $('#birthday');
    checkFio(fio);
    showInputError(birthday, birthday.attr('data-error-text'));
    showInputError(email, email.attr('data-error-text'));
    showInputError(message, message.attr('data-error-text'));
    checkPhone(phone);
    if (Object.keys(errors).length === 0) {
      $('.contact-form')[0].submit();
    }
  };

  $('input, select, textarea').on('change', function() {
    showInputError($(this), $(this).attr('data-error-text'));
  });

  $('#fio').on('change', function() {
    checkFio($(this));
  });

  $('#phone').on('change', function() {
    checkPhone($(this));
  });

  $('#q_1').on('change', function() {
    check_q_1($(this));
  });

  $('.btn-show-modal').on('click', function() {
    var callback, modalText;
    modalText = $(this).attr('data-modal-text');
    callback = $(this).attr('data-btn-callback');
    showModal(modalText, eval(callback));
  });

  $('.modal-btns button, .overlay').on('click', function() {
    hideModal();
  });

  $('.tooltip').on('mouseenter', function() {
    $(this).find('.tooltip-block').text($(this).attr('data-tooltip-text'));
    $(this).find('.tooltip-block').addClass('active');
  });

  $('.tooltip').on('mouseleave', function() {
    setTimeout((function() {
      $(this).find('.tooltip-block').removeClass('active');
    }), 1000);
  });

}).call(this);
