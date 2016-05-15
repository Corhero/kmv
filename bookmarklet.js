(function() {
  kmvyo = kmvyo || false;

  if (!kmvyo) {
    var scripto = document.createElement('script');
    scripto.setAttribute('id', 'kmv');
    scripto.setAttribute('src', 'https://corhero.github.io/kmv/init.js');
    document.body.appendChild(a);
    kmvyo = true;
  } else {
    var iframo = document.getElementById('kmviframe');
    iframo.setAttribute('class', '');
  }
})();
