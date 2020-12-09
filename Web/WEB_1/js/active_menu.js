window.addEventListener('load',function() {
  let pathname = document.location.pathname;
  pathname = pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length);
  for (var i = 0; i < 7; i++) {
    let thisURL = menu.children[i].children[0];

    if( thisURL.getAttribute("href") == pathname ){
      thisURL.classList.add("active");
    }
  }
});