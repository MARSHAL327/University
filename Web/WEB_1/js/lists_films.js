function printListofFilms(...films) {
	document.writeln('<ol class="film">');
	for (f in films) {
		document.writeln('<li>' + films[f] + '</li>');
	}
	document.writeln('</ol>');
}

   printListofFilms('Доктор Стрэндж','Мстители:Война бесконечности','Хищные птицы');

