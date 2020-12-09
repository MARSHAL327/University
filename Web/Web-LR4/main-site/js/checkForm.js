// проверка поля на пустоту
let checkInput = inputValue => { return inputValue.trim() === "" ? true : false}

let errors = {};

let showInputError = (input, errorMessage) => {
  if( checkInput(input.value) ){
    showError(input, errorMessage);
    errors.input = true;
  } else{
    hideError(input);
    delete errors.input;
  }
}

// =======проверка ФИО=======
function checkFio(fio) {
  if( checkInput(fio.value) || fio.value.trim().split(' ').length != 3 ){
    showError(fio, "ФИО неверно");
    errors.fio = true;
  } else {
    hideError(fio);
    delete errors.fio;
  }
}

if( document.getElementById("fio") !== null ){
  fio.addEventListener("change", (e) => {
    checkFio(e.target);
  })
}

// =======проверка телефона=======
function checkPhone(phone){
  if( checkInput(phone.value) ){
    showError(phone, "Заполните поле телефон!");
    errors.phone = true;
  } else if (phone.value.substr(0, 2) != "+3" && phone.value.substr(0, 2) != "+7") {
    showError(phone, "Неверный код страны");
    errors.phone = true;
  } else if (phone.value.length - 1 < 10 || phone.value.length - 1 > 12) {
      showError(phone, "Неверная длина телефона");
      errors.phone = true;
  } else if (isNaN(phone.value.substr(2, 11))) {
      showError(phone, "Вводить можно только цифры");
      errors.phone = true;
  } else if (phone.value.substr(2, 11).includes(" ")) {
      showError(phone, "Нельзя вводить пробелы");
      errors.phone = true;
  } else {
    hideError(phone);
    delete errors.phone;
  }
}

if( document.getElementById("phone") !== null ){
  phone.addEventListener("change", (e) => {
    checkPhone(e.target);
  });
}

// =======показываем ошибку=======
function showError(field, errorMessage) {
  let errorText = field.nextElementSibling;

  errorText.style.display = "block";
  field.style.borderColor = "#D32F2F";
  errorText.innerHTML = errorMessage;
  field.focus();
}

// =======скрываем ошибку=======
function hideError(field) {
  let errorText = field.nextElementSibling;

  field.style.borderColor = "#000";
  field.style.borderColor = "green";
  errorText.style.display = "none";
}

// =======проверяем форму целиком=======
function checkForm(form) {
    let fio = form.fio;
    let phone = form.phone;
    let email = form.email;
    let message = form.message;
    let birthday = form.birthday;

    checkFio(fio);
    showInputError(birthday, "Введите дату рождения");
    showInputError(email, "Введите Email");
    showInputError(message, "Введите сообщение");
    checkPhone(phone);
    
    if( errors.length === 0 ){
      form.submit();
    }
}

// =======проверяем первый вопрос из теста=======
function check_q_1(q_1){
  let q_value = q_1.value;

  hideError(q_1);
  if( checkInput(q_value) ){
    showError(q_1, "Заполните поле");
    errors.q_1 = true;
  } else if( q_value.split(' ').filter(item => item != "").length < 30 ){
    showError(q_1, "Нужно минимум 30 слов");
    delete errors.q_1;
  }
}

// =======проверяем форму теста =======
function checkTestForm(form){
  let q_1 = form.q_1;
  let fio = form.fio;

  check_q_1(q_1);
  checkFio(fio);

  if( errors.length === 0 ){
    form.submit();
  }
}

// =======МОДАЛЬНОЕ ОКНО=======
function showModal(modalText, btnType){
  $(".modal-wrapper").addClass("active");
  $(".modal-wrapper p").text(modalText);
  $(".modal-wrapper #yes_modal").attr("type", btnType);
}

function hideModal(){
  $(".modal-wrapper").removeClass("active");
}

$(".btn-show-modal").on("click", function(){
  let modalText = $(this).data("modal-text");
  let btnType = $(this).data("btn-type");

  showModal(modalText, btnType);
});

$(".modal-btns button, .overlay").on("click", function() {
  hideModal();
})

$("[data-tooltip-text]").mousemove(function (e) {
  $data_tooltip = $(this).attr("data-tooltip-text");
  
  $("#tooltip").text($data_tooltip)
               .css({ 
                   "top" : e.pageY + 5,
                  "left" : e.pageX + 5
               })
               .show();

}).mouseout(function () {

$("#tooltip").hide()
              .text("")
              .css({
                  "top" : 0,
                "left" : 0
              });
});