window.onload= function(){
	let thisHistory;
	let globalHistory;
	let pathname = document.location.pathname;
  	pathname = pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length);

saveThisHistory(pathname);
saveGlobalHistory(pathname);
drawHistoryTable();

//Истрия текущего сеанса
function saveThisHistory(pathname) {
  if( sessionStorage.getItem('thisHistory') === null ){
    thisHistory = {};
    sessionStorage.setItem('thisHistory', JSON.stringify(thisHistory));
  }

  thisHistory = JSON.parse(sessionStorage.getItem('thisHistory'));
  thisHistory[pathname] === undefined ? thisHistory[pathname] = 1 : thisHistory[pathname]++;
  sessionStorage.setItem('thisHistory', JSON.stringify(thisHistory));
}

//История за всё время
function saveGlobalHistory(pathname) {
	if( localStorage.getItem('globalHistory') === null ){
    globalHistory = {};
    localStorage.setItem('globalHistory', JSON.stringify(globalHistory));
  }

  globalHistory = JSON.parse(localStorage.getItem('globalHistory'));
  globalHistory[pathname] === undefined ? globalHistory[pathname] = 1 : globalHistory[pathname]++;
  localStorage.setItem('globalHistory', JSON.stringify(globalHistory));
}
  

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
}
