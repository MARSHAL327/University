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

  let albumChildrens = $(".content-wrapper").children();

  $(document).on("click", ".album .move-left", function () {
    
    let thieElParent = $(this).parent();
    let imgThisEl = thieElParent.find(".foto_img");

    // if( imgThisEl.attr("data-img-id") == 0 ){
    //   let albumChildrens = $(".content-wrapper").children();
    //   let firstEl = imgThisEl;
    //   let lastEl = $("figure").eq(albumChildrens.length);
    //   let temp;
    //   temp = albumChildrens[0];
    //   albumChildrens[0] = albumChildrens[14];
    //   albumChildrens[14] = temp;
    //   console.log(albumChildrens[1]);
    //   imgThisEl.attr("data-img-id", albumChildrens.length - 1);
    // } else {
    //   imgThisEl.attr("data-img-id", imgThisEl.attr("data-img-id") - 1);
    // }

    console.log(imgThisEl.attr("data-img-id") - 1);

    let moveEl = albumChildrens.eq(imgThisEl.attr("data-img-id") - 1);
    let imgMoveEl = moveEl.find(".foto_img");
    imgMoveEl.attr("data-img-id", +(imgMoveEl.attr("data-img-id")) + 1);
    moveEl.remove();
    thieElParent.after(moveEl);
  })

  $(document).on("click", ".album .move-right", function () {
    let thieElParent = $(this).parent();
    let imgThisEl = thieElParent.find(".foto_img");
    imgThisEl.attr("data-img-id", +(imgThisEl.attr("data-img-id")) + 1);



    let moveEl =  albumChildrens.eq(imgThisEl.attr("data-img-id") + 1);
    let imgMoveEl = moveEl.find(".foto_img");
    imgMoveEl.attr("data-img-id", imgMoveEl.attr("data-img-id") - 1);
    moveEl.remove();
    thieElParent.before(moveEl);
  })
} )