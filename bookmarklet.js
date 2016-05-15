var kmv = kmv || false;

(function() {
  if (!kmv) {
    var a = document.createElement('script');
    a.setAttribute('id', 'kmv');
    a.setAttribute('src', 'https://corhero.github.io/kmv/init.js');
    document.body.appendChild(a);
    kmv = true;
  } else {
    var b = document.getElementById('kmviframe');
    a.setAttribute('class', '');
  }
})();
