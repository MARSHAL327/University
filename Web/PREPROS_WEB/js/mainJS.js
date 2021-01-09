function printListofBooks(books) {
	document.writeln('<ol class="book">');
	var i;
	for (i = 0; i < books.length; i++) {
		document.writeln('<li>' + books[i] + '</li>');
	}
	document.writeln('</ol>');
}

   var books = new Array('Три товарища','Триумфальная арка','Жизнь взаймы,или У неба любимчиков нет','Анна Каренина','Гранатовый браслет');
   printListofBooks(books);

 function printListofFilms(films) {
	document.writeln('<ol class="film">');
	var i;
	for (i = 0; i < films.length; i++) {
		document.writeln('<li>' + films[i] + '</li>');
	}
	document.writeln('</ol>');
}

   var films = new Array('Доктор Стрэндж','Мстители:Война бесконечности','Хищные птицы');
   printListofFilms(films);

function photoalbum() {
 
var fotos = new Array(15);
var titles = new Array(15);


var ph = "photo/";
var i;
   for (i = 1; i < 16; i++) {
        fotos[i-1] = ph +"photo" + i + ".jpg";
   } 


titles[0] = "Прогулка";
titles[1] ="Закат";
titles[2] ="Типо модель";
titles[3] ="Лучшая работа";
titles[4] ="Моя любовь";
titles[5] ="Частичка Ялты";
titles[6] ="Позирую";
titles[7] ="Пейзаж Балаклавы";
titles[8] ="Мяу";
titles[9] ="Селфи";
titles[10] ="Лимон";
titles[11] ="Сияю";
titles[12] ="Селфи";
titles[13] ="Селфи";
titles[14] ="Ловлю сердечки";



var index=0;
document.writeln('<table class="photo">');
for (var j = 0; j < 3; j++){
      document.write('<tr>');
      for(i = index; i < index + 5; i++) {
      document.write('<td><a href=\"' + '\"><img src=\"' + fotos[i] + '\" title=\"' + titles[i] +'\" alt\"Фотография\"></a><p>' + titles[i] + '</p></td>');
      }
   index = i;
   document.write('</tr>');
   }
   document.writeln('</table>');
}

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


if (myPhone[0] !='+'){
	window.alert('Некорректный номер телефона.');
	document.contact.phone.focus();
	return false;
}
if (myPhone[1] !='3' && myPhone[1]!='7'){
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

function valid_test() {
	
	var fio = document.test.fio.value;
	
	if (fio == "") {
		window.alert("Пожалуйста, введите ФИО.");
		document.test.fio.focus();
		return false;
	}
	
	var i, space = 0;
	for (i = 1; i < fio.length; i++) {
		if (fio[i] == " " && fio[i-1] != " ")
			space++;
	}
	if (space != 2) {
        window.alert("Введено некорректное значение поля ФИО.");
		document.test.fio.focus();
		return false;
	}	
	

if (document.test.one.value == "") {
		window.alert('Пожалуйста, ответьте на первый вопрос.');
		document.test.one[0].focus();
		return false;
	}

if (document.test.two.value == "") {
		window.alert('Пожалуйста, ответьте на второй.');
		document.test.two[0].focus();
		return false;
	}	


if (document.test.three.value == "") {
		window.alert("Пожалуйста, на последний вопрос.");
		document.test.three.focus();
		return false;
	}
	
	var what = document.test.three.value;
	space = 0;
	for (i = 1; i < what.length; i++) {
		if (what[i] == ' ' && what[i-1] != ' ')
			space++;
	}
	
	if (space > 3) {
		window.alert('В определении более 4х слов. Пожалуйста, повторите ввод.');
		document.test.three.focus();
		return false;
	}
	
	
}