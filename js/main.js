document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#year').textContent = new Date().getFullYear();    
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });