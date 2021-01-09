(function() {
  var printListofFilms;

  printListofFilms = function(...films) {
    var f;
    document.writeln('<ol class="film">');
    for (f in films) {
      f = f;
      document.writeln('<li>' + films[f] + '</li>');
    }
    document.writeln('</ol>');
  };

  printListofBooks('Доктор Стрэндж', 'Мстители:Война бесконечности', 'Хищные птицы');

}).call(this);
