(function() {
  var drawActiveImg, generateAlbum, photoalbum, switchBigImg;

  photoalbum = function() {
    var fotos, i, index, j, ph, ph2, srcs, titles;
    fotos = new Array(15);
    ph = 'photo/';
    i = void 0;
    i = 1;
    while (i < 16) {
      fotos[i - 1] = ph + 'photo' + i + '.jpg';
      i++;
    }
    ph2 = 'photo/origin/';
    srcs = new Array(15);
    i = 1;
    while (i < 16) {
      srcs[i - 1] = ph2 + 'photo_' + i + '.jpg';
      i++;
    }
    titles = new Array(15);
    titles[0] = 'Прогулка';
    titles[1] = 'Закат';
    titles[2] = 'Типо модель';
    titles[3] = 'Лучшая работа';
    titles[4] = 'Моя любовь';
    titles[5] = 'Частичка Ялты';
    titles[6] = 'Позирую';
    titles[7] = 'Пейзаж Балаклавы';
    titles[8] = 'Мяу';
    titles[9] = 'Селфи';
    titles[10] = 'Лимон';
    titles[11] = 'Сияю';
    titles[12] = 'Селфи';
    titles[13] = 'Селфи';
    titles[14] = 'Ловлю сердечки';
    index = 0;
    j = 0;
    while (j < 3) {
      i = index;
      while (i < index + 5) {
        document.write('<div><a href="javascript://" ><img data-original="' + srcs[i] + '" class="foto_img" src="' + fotos[i] + '" title="' + titles[i] + '" alt"Фотография"></a><p>' + titles[i] + '</p></div>');
        i++;
      }
      index = i;
      j++;
    }
  };

  switchBigImg = function() {
    if (album_img.style.display === 'block') {
      black_bg.style.display = 'none';
      album_img.style.display = 'none';
    } else {
      black_bg.style.display = 'block';
      album_img.style.display = 'block';
    }
  };

  // ============ФОТОАЛЬБОМ============
  generateAlbum = function(col, n) {
    var fotos, i, ph, ph2, srcs, titles;
    fotos = new Array(15);
    ph = 'photo/';
    i = void 0;
    i = 1;
    while (i < 16) {
      fotos[i - 1] = ph + 'photo' + i + '.jpg';
      i++;
    }
    ph2 = 'photo/origin/';
    srcs = new Array(15);
    i = 1;
    while (i < 16) {
      srcs[i - 1] = ph2 + 'photo_' + i + '.jpg';
      i++;
    }
    titles = new Array(15);
    titles[0] = 'Прогулка';
    titles[1] = 'Закат';
    titles[2] = 'Типо модель';
    titles[3] = 'Лучшая работа';
    titles[4] = 'Моя любовь';
    titles[5] = 'Частичка Ялты';
    titles[6] = 'Позирую';
    titles[7] = 'Пейзаж Балаклавы';
    titles[8] = 'Мяу';
    titles[9] = 'Селфи';
    titles[10] = 'Лимон';
    titles[11] = 'Сияю';
    titles[12] = 'Селфи';
    titles[13] = 'Селфи';
    titles[14] = 'Ловлю сердечки';
  };

  drawActiveImg = function(idActiveImg) {
    var srcClickedImg, textClickedImg;
    if (idActiveImg <= 0) {
      $('.prev-img').addClass('disabled');
    } else {
      $('.prev-img').removeClass('disabled');
    }
    if (idActiveImg >= 14) {
      $('.next-img').addClass('disabled');
    } else {
      $('.next-img').removeClass('disabled');
    }
    srcClickedImg = $(`.foto_img[data-img-id=${idActiveImg}]`).attr('src');
    textClickedImg = $(`.foto_img[data-img-id=${idActiveImg}]`).attr('title');
    $('#album_img img').prop('src', srcClickedImg);
    $('#album_img>figcaption').text(textClickedImg);
  };

  $(document).ready(function() {
    generateAlbum(5, 15);
    $('.next-img').on('click', function(e) {
      var activeImg;
      activeImg = $('#album_img').data('active-img');
      drawActiveImg(activeImg + 1);
      $('#album_img').data('active-img', activeImg + 1);
    });
    $('.prev-img').on('click', function(e) {
      var activeImg;
      activeImg = $('#album_img').data('active-img');
      drawActiveImg(activeImg - 1);
      $('#album_img').data('active-img', activeImg - 1);
    });
    $('.foto_img').on('click', function(e) {
      var activeImg;
      $('#album_img').attr('data-active-img', $(this).data('img-id'));
      activeImg = $('#album_img').data('active-img');
      drawActiveImg(activeImg);
      switchBigImg();
    });
    $('#black_bg').on('click', function() {
      switchBigImg();
    });
  });

}).call(this);
