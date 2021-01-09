printListofFilms = (films...) ->
  document.writeln '<ol class="film">'
  for f of films
    `f = f`
    document.writeln '<li>' + films[f] + '</li>'
  document.writeln '</ol>'
  return

printListofBooks 'Доктор Стрэндж','Мстители:Война бесконечности','Хищные птицы'