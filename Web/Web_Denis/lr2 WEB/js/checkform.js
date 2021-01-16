let Errors = {};
let checkInput = inputValue => { return inputValue.trim() === "" ? true : false}
let showInputError = (input, errorMessage) => {
  if( checkInput(input.value) ){
    alert(errorMessage);    
    input.focus();
    Errors.input = true;
    }
    else {
        delete Errors.input;
      }
}

function checkFio(fio) {
  if( checkInput(fio.value) || fio.value.trim().split(' ').length != 3 ){
    alert("ФИО неверно");
    Errors.fio = true;
  }
  else {
    delete Errors.fio;
  }
}

function checkPhone(phone){
  if( checkInput(phone.value) ){
    showPhoneError(phone, "Заполните поле телефон!");
  } else if (phone.value.substr(0, 2) != "+3" && phone.value.substr(0, 2) != "+7") {
    showPhoneError(phone, "Неверный код страны");
  } else if (phone.value.length - 1 < 10 || phone.value.length - 1 > 12) {
    showPhoneError(phone, "Неверная длина телефона");
  } else if (isNaN(phone.value.substr(2, 11))) {
    showPhoneError(phone, "Вводить можно только цифры");
  } else if (phone.value.substr(2, 11).includes(" ")) {
    showPhoneError(phone, "Нельзя вводить пробелы");
  } 
  else {
    delete Errors.phone;
  }
}

function showPhoneError(phone, message) {
    alert(message);    
    phone.focus();
    Errors.phone = true;
}

function checkForm(form) {
    let fio = form.fio;
    let phone = form.phone;
    let email = form.email;
    let message = form.message;
    checkFio(fio);
    showInputError(email, "Введите Email");
    showInputError(message, "Введите сообщение");
    checkPhone(phone);
    if(Object.keys(Errors).length === 0) {
      form.submit();
    }
}
 

function check_q_1(q_1){
  let q_value = q_1.value;
 
  hideError(q_1);
  if( checkInput(q_value) ){
    showError(q_1, "Заполните поле");
  } else if( q_value.split(' ').filter(item => item != "").length < 30 ){
    showError(q_1, "Нужно минимум 30 слов");
  }
}
 

function checkTestForm(form){
  let q_1 = form.q_1;
  let fio = form.fio;
 
  check_q_1(q_1);
  checkFio(fio);
}