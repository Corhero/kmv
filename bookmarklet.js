var kmvyo = kmvyo || false;

(function() {
  if (!kmvyo) {
    var scripto = document.createElement('script');
    scripto.setAttribute('id', 'kmv');
    scripto.setAttribute('src', 'https://corhero.github.io/kmv/init.js');
    document.body.appendChild(scripto);
    kmvyo = true;
  } else {
    var iframo = document.getElementById('kmviframe');
    iframo.style.display = 'block';
  }
})();
