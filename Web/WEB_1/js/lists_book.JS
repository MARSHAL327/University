
function printListofBooks(...books) {
	document.writeln('<ol class="book">');
	for (b in books) {
		document.writeln('<li>' + books[b] + '</li>');
	}
	document.writeln('</ol>');
}

   printListofBooks('Три товарища','Триумфальная арка','Жизнь взаймы,или У неба любимчиков нет','Анна Каренина','Гранатовый браслет');

