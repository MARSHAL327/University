function photoalbum() {
  var fotos = new Array(15);
  var ph = "photo/";
  var i;
  for (i = 1; i < 16; i++) {
    fotos[i-1] = ph +"photo" + i + ".jpg";
  }

  var ph2="photo/origin/";
  var srcs= new Array(15);
  for (i = 1; i < 16; i++) {
    srcs[i-1] = ph2 + "photo_" + i + ".jpg";
  }

  var titles = new Array(15);
  titles[0] = "Прогулка";
  titles[1] ="Закат";
  titles[2] ="Типо модель";
  titles[3] ="Лучшая работа";
  titles[4] ="Моя любовь";
  titles[5] ="Частичка Ялты";
  titles[6] ="Позирую";
  titles[7] ="Пейзаж Балаклавы";
  titles[8] ="Мяу";
  titles[9] ="Селфи";
  titles[10] ="Лимон";
  titles[11] ="Сияю";
  titles[12] ="Селфи";
  titles[13] ="Селфи";
  titles[14] ="Ловлю сердечки";



  var index=0;
  for (var j = 0; j < 3; j++){
    for(i = index; i < index + 5; i++) {
      document.write('<div><a href="javascript://" ><img data-original="'+srcs[i]+'" class="foto_img" src=\"' + fotos[i] + '\" title=\"' + titles[i] +'\" alt\"Фотография\"></a><p>' + titles[i] + '</p></div>');
    }
    index = i;
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
  var el=document.getElementsByClassName("foto_img");
  for (var i=0; i<el.length;i++){
    el[i].addEventListener("click", function(){
      switchBigImg();
      album_img.children[0].setAttribute("src",this.getAttribute("data-original"));
      album_img.children[1].innerHTML = this.getAttribute("title");
    } ,false);
  }

  black_bg.addEventListener("click", switchBigImg, false);
});

