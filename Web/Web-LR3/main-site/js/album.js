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

    let count = 0;

    for (let i = 0; i < n; i++) {
      document.write("<figure>");
      document.write("<img class='foto_img' title='" + titles[i] + "' src='" + fotos[i] + "'>");
      document.write("<figcaption>" + titles[i] + "</figcaption>");
      document.write("</figure>");
    }
}

function switchBigImg(){
  if( album_img.style.display == "block" ){
    black_bg.style.display = "none";
    album_img.style.display = "none";
  } else {
    black_bg.style.display = "block";
    album_img.style.display = "block";
  }
}

window.addEventListener('load',function(){
  var images = document.getElementsByClassName("foto_img");
  for (var i=0; i<images.length;i++){
    images[i].addEventListener("click", function(e){
      let clickedImgSrc = e.target.getAttribute("src");
      
      switchBigImg();
      album_img.children[0].setAttribute("src", clickedImgSrc);
      album_img.children[1].innerHTML = this.getAttribute("title");
    } ,false);
  }

  black_bg.addEventListener("click", switchBigImg, false);
});