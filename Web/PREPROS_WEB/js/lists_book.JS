(function() {
  var printListofBooks;

  printListofBooks = function(...books) {
    var b;
    document.writeln('<ol class="book">');
    for (b in books) {
      b = b;
      document.writeln('<li>' + books[b] + '</li>');
    }
    document.writeln('</ol>');
  };

  printListofBooks('Три товарища', 'Триумфальная арка', 'Жизнь взаймы,или У неба любимчиков нет', 'Анна Каренина', 'Гранатовый браслет');

}).call(this);
