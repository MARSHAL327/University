// проверка поля на пустоту
let checkInput = inputValue => { return inputValue.trim() === "" ? true : false}
let showInputError = (input, errorMessage) => {
  if( checkInput(input.value) ){
    showError(input, errorMessage);
  } else{
    hideError(input);
  }
}

// =======проверка ФИО=======
function checkFio(fio) {
  if( checkInput(fio.value) || fio.value.trim().split(' ').length != 3 ){
    showError(fio, "ФИО неверно");
  } else {
    hideError(fio);
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
  } else if (phone.value.substr(0, 2) != "+3" && phone.value.substr(0, 2) != "+7") {
    showError(phone, "Неверный код страны");
  } else if (phone.value.length - 1 < 10 || phone.value.length - 1 > 12) {
      showError(phone, "Неверная длина телефона");
  } else if (isNaN(phone.value.substr(2, 11))) {
      showError(phone, "Вводить можно только цифры");
  } else if (phone.value.substr(2, 11).includes(" ")) {
      showError(phone, "Нельзя вводить пробелы");
  } else {
    hideError(phone);
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
}

// =======проверяем первый вопрос из теста=======
function check_q_1(q_1){
  let q_value = q_1.value;

  hideError(q_1);
  if( checkInput(q_value) ){
    showError(q_1, "Заполните поле");
  } else if( q_value.split(' ').filter(item => item != "").length < 30 ){
    showError(q_1, "Нужно минимум 30 слов");
  }
}

// =======проверяем форму теста =======
function checkTestForm(form){
  let q_1 = form.q_1;
  let fio = form.fio;

  check_q_1(q_1);
  checkFio(fio);
}