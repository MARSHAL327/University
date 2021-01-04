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

    for (let i = 0; i < n; i++) {
      $(".album").append(`
      <figure>
      <img class='foto_img' data-img-id=${i} title='${titles[i]}' src='${fotos[i]}'>
      <figcaption>${titles[i]}</figcaption>
      </figure>
      `)
    }
}

function drawActiveImg(idActiveImg){
  if( idActiveImg <= 0 ){
    $(".prev-img").addClass("disabled");
  } else $(".prev-img").removeClass("disabled");

  if( idActiveImg >= 14 ){
    $(".next-img").addClass("disabled");
  } else $(".next-img").removeClass("disabled");

  let srcClickedImg = $(`.foto_img[data-img-id=${idActiveImg}]`).attr("src");
  let textClickedImg = $(`.foto_img[data-img-id=${idActiveImg}]`).attr("title");

  $("#album_img img").prop("src", srcClickedImg);
  $("#album_img>span").text( textClickedImg );
}

$(document).ready( function() {
  generateAlbum(6, 15);

  $(".next-img").on("click", function(e) {
    let activeImg = $("#album_img").data("active-img");
    drawActiveImg(activeImg + 1);
    $("#album_img").data("active-img", activeImg + 1);
  })

  $(".prev-img").on("click", function(e) {
    let activeImg = $("#album_img").data("active-img");
    drawActiveImg(activeImg - 1);
    $("#album_img").data("active-img", activeImg - 1);
  })


  $(".foto_img").on("click", function(e) {      
    $("#album_img").attr("data-active-img", $(this).data("img-id"));
    let activeImg = $("#album_img").data("active-img");

    drawActiveImg(activeImg);
    $(".wrapper_album_img").toggleClass("active");
  });

  $("#black_bg").on("click", function() {
    $(".wrapper_album_img").toggleClass("active"); 
  });
} )