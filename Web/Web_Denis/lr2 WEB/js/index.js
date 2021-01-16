
let Fotos = [];
let Titles = [];

for (let index = 1; index < 16; index++) {
    Fotos.push(`img/${index}.jpg`);
}

for (let index = 1; index < 16; index++) {
    Titles.push(`Рисунок ${index} Подпись ${index}`);
}

function AlbumGeneretor(ImageCount) {
    for (let index = 0; index < ImageCount; index++) {
       document.write(`<figure>
       <img class="foto_img" title=${Titles[index]} src=${Fotos[index]} />
       <figcaption>${Titles[index]}</figcaption>
     </figure>`);
    }
}
