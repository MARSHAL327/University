function form(){

var fio = document.contact.fio.value;
	
	if (fio == "") {
		window.alert("Пожалуйста, введите ФИО.");
		document.contact.fio.focus();
		return false;
	}
	
	var i, space = 0;
	for (i = 1; i < fio.length; i++) {
		if (fio[i] == " " && fio[i-1] != " ")
			space++;
	}
	if (space != 2) {
        window.alert("Введено некорректное значение поля ФИО.");
		document.contact.fio.focus();
		return false;
	}	
	
if(document.contact.sex.value==""){
	window.alert('Пожалуйста, укажите свой пол.');
		document.contact.sex[0].focus();
		return false;
}

if (document.contact.age.value == "") {
		window.alert('Пожалуйста, укажите свой возраст.');
		document.contact.age[0].focus();
		return false;
	}	

var myPhone = document.contact.phone.value;
	if (myPhone == "") {
        window.alert('Пожалуйста, введите номер телефона.');
		document.contact.phone.focus();
		return false;
	}	
	if (myPhone.length < 10 || myPhone.length > 12) {
		window.alert('Некорректный номер телефона.');
		document.contact.phone.focus();
		return false;
	}


	if (myPhone.substr(0, 2) != '+3' && myPhone.substr(0, 2) != '+7'){
		window.alert('Некорректный номер телефона.');
		document.contact.phone.focus();
		return false;
	}

	if ( isNaN( myPhone.substr(2, 11) ) ){
		window.alert('Некорректный номер телефона.');
		document.contact.phone.focus();
		return false;
		}

if(document.contact.replyto.value==""){
	window.alert('Пожалуйста,укажите адрес электронной почты.');
	document.contact.replyto.focus();
	return false;
}
if(document.contact.replyto.value.indexOf('@')<0){
	window.alert('Некорректный адрес электронной почты.');
	document.contact.replyto.focus();
	return false;
}

if (document.contact.message.value==""){
	window.alert('Пожалуйста,введите сообщение.');
	document.contact.message.focus();
	return false;
}
}



/*document.querySelector('button').onclick = function calendar(){
	let dateStart=document.querySelector('#start-date').value;
	let dateEnd=document.querySelector('#end-date').value;
	dateStart= Date.parse(dateStart);
	dareEnd=Date.parse(dateEnd);
	for(let i=dateStart;i<dateEnd;i=i+24*60*60*1000){
		console.log(new Date(i));
	}
	console.log(dateStart);
}*/