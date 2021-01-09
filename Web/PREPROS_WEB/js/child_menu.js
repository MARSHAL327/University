(function() {
  var el, hideSub, i, showSub;

  el = document.getElementsByClassName('menu-item');

  showSub = function() {
    console.log('ok');
    if (this.children.length > 1) {
      this.children[1].style.height = 'auto';
      this.children[1].style.overflow = 'visible';
      this.children[1].style.opacity = '1';
    } else {
      return false;
    }
  };

  hideSub = function() {
    if (this.children.length > 1) {
      this.children[1].style.height = '0';
      this.children[1].style.overflow = 'hidden';
      this.children[1].style.opacity = '0';
    } else {
      return false;
    }
  };

  i = 0;

  while (i < el.length) {
    console.log(el[i]);
    el[i].addEventListener('mouseenter', showSub, false);
    el[i].addEventListener('mouseleave', hideSub, false);
    i++;
  }

}).call(this);
