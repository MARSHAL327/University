printListofFilms = (films...)->
  document.writeln '<ol class='film'>'
  for f of films
    document.writeln '<li>' + films[f] + '</li>'
  document.writeln '</ol>'
  return

printListofFilms 'Доктор Стрэндж', 'Мстители:Война бесконечности', 'Хищные птицы'