// ============Фотоальбом============
function generateAlbum(col, n) {
    let fotos = [];
    let titles = [];

    for (let i = 0; i < n; i++) {
        titles.push("Рисунок " + (i + 1) + " Подпись " + (i + 1));
    }

    for (let i = 0; i < n; i++) {
        fotos.push('img/' + (i + 1) + '.jpg');
    }

    $(".total-count").text(n);

    for (let i = 0; i < n; i++) {
      $(".album").append(`
      <figure>
      <div class="move-left"><</div>
      <img class='foto_img' data-img-id=${i} title='${titles[i]}' src='${fotos[i]}'>
      <figcaption>${titles[i]}</figcaption>
      <div class="move-right">></div>
      </figure>
      `)
    }
}

function drawActiveImg(idActiveImg, firstOpen){
  if( idActiveImg <= 0 ){
    $(".prev-img").addClass("disabled");
  } else $(".prev-img").removeClass("disabled");

  if( idActiveImg >= 14 ){
    $(".next-img").addClass("disabled");
  } else $(".next-img").removeClass("disabled");

  let srcClickedImg = $(`.foto_img[data-img-id=${idActiveImg}]`).attr("src");
  let textClickedImg = $(`.foto_img[data-img-id=${idActiveImg}]`).attr("title");

  $(".num-this-img").text(idActiveImg + 1);

  if ( firstOpen ){
    $("#album_img img").prop("src", srcClickedImg);
    $("#album_img>span").text( textClickedImg );
  } else {
    $("#album_img>span").fadeOut();
    $("#album_img img").fadeOut(400, "swing", function() {
      $("#album_img img").prop("src", srcClickedImg).fadeIn();
      $("#album_img>span").text( textClickedImg ).fadeIn();
    }, false);
  }

}

$(document).ready( function() {
  generateAlbum(6, 15);

  $(".next-img").on("click", function(e) {
    let activeImg = $("#album_img").data("active-img");
    $("#album_img").data("active-img", activeImg + 1);
    drawActiveImg(activeImg + 1, false);
  })

  $(".prev-img").on("click", function(e) {
    let activeImg = $("#album_img").data("active-img");
    drawActiveImg(activeImg - 1, false);
    $("#album_img").data("active-img", activeImg - 1);
  })


  $(document).on("click", ".foto_img", function(e) {      
    let activeImg = $(this).data("img-id");
    $("#album_img").data("active-img", activeImg );
    
    drawActiveImg(activeImg, true);
    $(".wrapper_album_img").toggleClass("active");
  });

  $("#black_bg, .close").on("click", function() {
    $(".wrapper_album_img").toggleClass("active"); 
  });


  // ЗАДАНИЕ К 4ой ЛАБЕ
  let albumChildrens, thisElParent, imgThisEl, prevEl, imgPrevEl, nextEl;

  function InitImgData(_this){
    albumChildrens = $(".content-wrapper").children(); // все дочерние элементы

    // текущий элемент
    thisElParent = _this.parent(); // тег fugure
    imgThisEl = thisElParent.find(".foto_img"); // текущая картинка

    // предыдущий элемент
    prevEl = albumChildrens.eq(thisElParent.index() - 1); // предыдущий элемент
    imgPrevEl = prevEl.find(".foto_img"); // картинка предыдущего элемента

    // следующий элемент
    nextEl = albumChildrens.eq(thisElParent.index() + 1 >= albumChildrens.length ? 0 : thisElParent.index() + 1); // следующий элемент
    imgNextEl = nextEl.find(".foto_img"); // картинка следующего элемента
  }

  $(document).on("click", ".album .move-left", function () {    
    InitImgData($(this));

    if( thisElParent.index() + 1 < albumChildrens.length ){
      prevEl.before(thisElParent);
      nextEl.before(prevEl);
    } else {
      prevEl.before(thisElParent);
    }

    imgPrevEl.attr("data-img-id", prevEl.index());
    imgThisEl.attr("data-img-id", thisElParent.index());
  })

  $(document).on("click", ".album .move-right", function () {
    InitImgData($(this));
    
    if( thisElParent.index() != 0 ){
      nextEl.after(thisElParent);
      prevEl.after(nextEl);
    } else {
      nextEl.after(thisElParent);
    }
    
    imgNextEl.attr("data-img-id", nextEl.index());
    imgThisEl.attr("data-img-id", thisElParent.index());
  })
} )