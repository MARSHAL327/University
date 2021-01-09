(function() {
  var drawActiveImg;

  drawActiveImg = function(idActiveImg, firstOpen) {
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
    srcClickedImg = $('.foto_img[data-img-id=' + idActiveImg + ']').attr('src');
    textClickedImg = $('.foto_img[data-img-id=' + idActiveImg + ']').attr('title');
    $('.num-this-img').text(idActiveImg + 1);
    if (firstOpen) {
      $('#album_img img').prop('src', srcClickedImg);
      $('#album_img>span').text(textClickedImg);
    } else {
      $('#album_img>span').fadeOut();
      $('#album_img img').fadeOut(400, 'swing', (function() {
        $('#album_img img').prop('src', srcClickedImg).fadeIn();
        $('#album_img>span').text(textClickedImg).fadeIn();
      }), false);
    }
  };

  $(document).ready(function() {
    var albumChildrens;
    $('.total-count').text(15);
    $('.next-img').on('click', function(e) {
      var activeImg;
      activeImg = $('#album_img').data('active-img');
      $('#album_img').data('active-img', activeImg + 1);
      drawActiveImg(activeImg + 1, false);
    });
    $('.prev-img').on('click', function(e) {
      var activeImg;
      activeImg = $('#album_img').data('active-img');
      drawActiveImg(activeImg - 1, false);
      $('#album_img').data('active-img', activeImg - 1);
    });
    $(document).on('click', '.foto_img', function(e) {
      var activeImg;
      activeImg = $(this).data('img-id');
      $('#album_img').data('active-img', activeImg);
      drawActiveImg(activeImg, true);
      $('.wrapper_album_img').toggleClass('active');
    });
    $('#black_bg, .close').on('click', function() {
      $('.wrapper_album_img').toggleClass('active');
    });
    albumChildrens = $('.content-wrapper').children();
    $(document).on('click', '.album .move-left', function() {
      var imgMoveEl, imgThisEl, moveEl, thieElParent;
      thieElParent = $(this).parent();
      imgThisEl = thieElParent.find('.foto_img');
      moveEl = albumChildrens.eq(imgThisEl.attr('data-img-id') - 1);
      imgMoveEl = moveEl.find('.foto_img');
      imgMoveEl.attr('data-img-id', +imgMoveEl.attr('data-img-id') + 1);
      moveEl.remove();
      thieElParent.after(moveEl);
    });
    $(document).on('click', '.album .move-right', function() {
      var imgMoveEl, imgThisEl, moveEl, thieElParent;
      thieElParent = $(this).parent();
      imgThisEl = thieElParent.find('.foto_img');
      imgThisEl.attr('data-img-id', +imgThisEl.attr('data-img-id') + 1);
      moveEl = albumChildrens.eq(imgThisEl.attr('data-img-id') + 1);
      imgMoveEl = moveEl.find('.foto_img');
      imgMoveEl.attr('data-img-id', imgMoveEl.attr('data-img-id') - 1);
      moveEl.remove();
      thieElParent.before(moveEl);
    });
  });

}).call(this);
