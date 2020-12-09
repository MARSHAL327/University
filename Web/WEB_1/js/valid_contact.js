function resetb() {
   window.alert("reset");
    document.contact.fio.style.backgroundColor = "#CFF4D2";
    document.contact.birthday.style.backgroundColor = "#CFF4D2";
    document.contact.phone.style.backgroundColor = "#CFF4D2";
	document.contact.replyto.style.backgroundColor = "#CFF4D2";
	document.contact.message.style.backgroundColor = "#CFF4D2";
}

function validate_form() {
    var valid = true;
    if (document.contact.pol[0].checked == false && document.contact.pol[1].checked== false && valid == true){
	   valid = false;
    }
    if (validate_name('ErName') == false)
        valid = false;
    if (document.getElementById("birthday").value == ""){
       document.getElementById("birthday").style.backgroundColor = "#DF3F46";
       valid = false;
    }
    if (validate_email('ErMail') == false)
        valid = false;
    if (validate_message() == false)
        valid == false;
    if (validate_phone('ErPhone') == false)
        valid = false;

    if (valid == false) {
        window.alert("Поля не заполнены или заполнены неверно. Незаполненные отмечены красным.")
    }
    return valid;
}

function hideHints(){
   for (var i = 0; i < hideHints.arguments.length; i++) {
   document.getElementById(hideHints.arguments[i]).innerHTML = "";
   }
}

var hids = ['ErName' , 'ErMail', 'ErPhone'];
var hints = ['ФИО должно содержать 3 слова"' , 'Например, name@domen.ru', 'Номер начинается на 7 или 3. Например, 79781122334'];

function validate_name(hint){
    var regExp = /^[а-яА-ЯёЁa-zA-Z]+\s[а-яА-ЯёЁa-zA-Z]+\s[а-яА-ЯёЁa-zA-Z]+$/;
    if (!(regExp.test(document.contact.fio.value))) {
	   document.getElementById(hint).style.color = "#F2A490";
       document.contact.fio.style.backgroundColor = "#F2A490";
       document.getElementById(hint).innerHTML = hints[hids.indexOf(hint)];
       return false;
    } else {
        document.contact.fio.style.backgroundColor = "#aed581";
		document.getElementById(hint).style.backgroundColor = "#F2A490";
		document.getElementById(hint).innerHTML = "";
        return true;
    }
}

function validate_date() {
	if (document.getElementById("birthday").value == ""){
       document.getElementById("birthday").style.backgroundColor = "#F2A490";
       valid = false;
    }
}

function validate_email(hint){
    var regExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    if (!regExp.test(document.contact.replyto.value)) {
		document.getElementById(hint).style.color = "#F2A490";
        document.contact.replyto.style.backgroundColor = "#F2A490";
        document.getElementById(hint).innerHTML = hints[hids.indexOf(hint)];
        return false;
    } else {
        document.contact.replyto.style.backgroundColor = "#CFF4D2";
		document.getElementById(hint).style.backgroundColor = "#F2A490";
        document.getElementById(hint).innerHTML = "";
        return true;
    }
}

function validate_phone(hint){
    var regExp = /^[73]\d{8,10}$/;
    if (!(regExp.test(document.contact.phone.value))) {
        document.contact.phone.style.backgroundColor = "#F2A490";
        document.getElementById(hint).innerHTML = hints[hids.indexOf(hint)];
		document.getElementById(hint).style.color = "#F2A490";
        return false;
    } else {
        document.contact.phone.style.backgroundColor = "#CFF4D2";
		document.getElementById(hint).style.backgroundColor = "#F2A490";
        document.getElementById(hint).innerHTML = "";
        return true;
    }


}

function validate_message(){
    if (document.contact.message.value == "") {
        document.contact.message.style.backgroundColor = "#F2A490";
        return false;
    } else {
        document.contact.message.style.backgroundColor = "#CFF4D2";
        return true;
    }
}