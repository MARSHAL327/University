// ============Мои интересы============
function generateSection(object) {
    switch (object.type) {
        case "section":
            document.write(`
      <div id="` + object.id + `" class="parallax-wrapper">
      <div class="parallax-img" style="background: url(` + object.bgUrl + `) no-repeat fixed;"></div>
      <div class="parallax">
      <div class="parallax-title">` + object.title + `</div>
      <hr class="parallax-hr">
      <div class="parallax-content">` + object.text + `</div>
      </div>
      </div>
      `)
            break;
        case "link":
            document.write(`
      <a href="#` + object.id + `">
      <li>` + object.title + `</li>
      </a>
      `)
      break;
    }
}

// ============Подменю============
let el = document.getElementsByClassName('menu-item');

for (let i = 0; i < el.length; i++) {
    el[i].addEventListener("mouseenter", showSubMenu, false);
    el[i].addEventListener("mouseleave", hideSubMenu, false);
}

function showSubMenu(e) {
    if (this.children.length > 1) {
        this.children[1].style.display = "grid";
    } else {
        return false;
    }
}

function hideSubMenu(e) {
    if (this.children.length > 1) {
        this.children[1].style.display = "none";
    } else {
        return false;
    }
}


// ============Время============
let month = "";

let russianMonthName = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]

function drawTime() {
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  s < 10 ? s = "0" + s : s;
  m < 10 ? m = "0" + m : m;
  h < 10 ? h = "0" + h : h;

  time.innerHTML =`${h}:${m}:${s} ${date.getDay()} ${russianMonthName[date.getMonth()]} ${date.getFullYear()}`;
}

let timerId = setInterval(() => {
  drawTime();
}, 1000);

window.onload = function() {
  let thisHistory, globalHistory;
  let pathname = document.location.pathname; // адрес текущей страницы
  pathname = pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length);

  drawTime();
  saveThisHistory(pathname);
  saveGlobalHistory(pathname);
  if( pathname == "history.html" ) drawHistoryTable();
  
  for (let i = 0; i < menu.children.length; i++) {
    let thisURL = menu.children[i].children[0];

    if( thisURL.getAttribute("href") == pathname ){
      thisURL.classList.add("active");
    }
  }
}

// =================История просмотра================
function saveThisHistory(pathname) {
  if( sessionStorage.getItem('thisHistory') === null ){
    thisHistory = {};
    sessionStorage.setItem('thisHistory', JSON.stringify(thisHistory));
  }

  thisHistory = JSON.parse(sessionStorage.getItem('thisHistory'));
  thisHistory[pathname] === undefined ? thisHistory[pathname] = 1 : thisHistory[pathname]++;
  sessionStorage.setItem('thisHistory', JSON.stringify(thisHistory));
}

function saveGlobalHistory(pathname) {
  if( localStorage.getItem('globalHistory') === null ){
    globalHistory = {};
    localStorage.setItem('globalHistory', JSON.stringify(globalHistory));
  }

  globalHistory = JSON.parse(localStorage.getItem('globalHistory'));
  globalHistory[pathname] === undefined ? globalHistory[pathname] = 1 : globalHistory[pathname]++;
  localStorage.setItem('globalHistory', JSON.stringify(globalHistory));
}

// Рисуем таблицу для истории
function drawHistoryTable() {
  for (let i = 0; i < menu.children.length; i++) {
    let link = menu.children[menu.children.length - i - 1].children[0];
    let linkSrc = link.getAttribute("href");

    history_table.children[0].insertAdjacentHTML("afterend",
    `<tr>
      <td>${link.innerHTML}</td>
      <td>${thisHistory[linkSrc] || "0"}</td>
      <td>${globalHistory[linkSrc] || "0"}</td>
    </tr>
    `);
  }
}