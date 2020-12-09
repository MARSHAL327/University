window.onload= function(){
	let thisHistory;
	let globalHistory;
	let pathname = document.location.pathname;
  	pathname = pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length);

saveThisHistory(pathname);
//saveGlobalHistory(pathname);
drawHistoryTable();

function saveThisHistory(pathname) {
  if( localStorage.getItem('thisHistory') === null ){
    thisHistory = {};
    localStorage.setItem('thisHistory', JSON.stringify(thisHistory));
  }

  thisHistory = JSON.parse(localStorage.getItem('thisHistory'));
  thisHistory[pathname] === undefined ? thisHistory[pathname] = 1 : thisHistory[pathname]++;
  localStorage.setItem('thisHistory', JSON.stringify(thisHistory));
}

function saveGlobalHistory(pathname) {
  if( getCookie('globalHistory') === undefined ){
    globalHistory = {};
    setCookie('globalHistory', JSON.stringify(globalHistory));
  }

  globalHistory = JSON.parse( getCookie('globalHistory') );
  globalHistory[pathname] === undefined ? globalHistory[pathname] = 1 : globalHistory[pathname]++;
  setCookie('globalHistory', JSON.stringify(globalHistory));
}
// Работа с cookie
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  
  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}
function drawHistoryTable() {
  for (let i = 0; i < menu.children.length; i++) {
    let link = menu.children[menu.children.length - i - 1].children[0];
    let linkSrc = link.getAttribute("href");

    history_table.children[0].insertAdjacentHTML("afterend",
    `<tr>
      <td>${link.innerHTML}</td>
      <td>${thisHistory[linkSrc] || "0"}</td>
      
    </tr>
    `);
  }
}
}

//<td>${globalHistory[linkSrc] || "0"}</td>