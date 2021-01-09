(function() {
  window.addEventListener('load', function() {
    var i, pathname, thisURL;
    pathname = document.location.pathname;
    pathname = pathname.slice(pathname.lastIndexOf('/') + 1, pathname.length);
    i = 0;
    while (i < 8) {
      thisURL = menu.children[i].children[0];
      if (thisURL.getAttribute('href') === pathname) {
        thisURL.classList.add('active');
      }
      i++;
    }
  });

}).call(this);
