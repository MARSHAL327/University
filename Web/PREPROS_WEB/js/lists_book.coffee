printListofBooks = (books...) ->
  document.writeln '<ol class="book">'
  for b of books
    `b = b`
    document.writeln '<li>' + books[b] + '</li>'
  document.writeln '</ol>'
  return

printListofBooks 'Три товарища', 'Триумфальная арка', 'Жизнь взаймы,или У неба любимчиков нет', 'Анна Каренина', 'Гранатовый браслет'
