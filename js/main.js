let map;
const ubicacion = new google.maps.LatLng(28.471001,-16.250654);
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#year').textContent = new Date().getFullYear();
  
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);

  slowLinks();
  drawMap();
});

new Vue({
  el: '#services',
  data: {
    services: [
      {
        title: 'tatuajes',
        img: 'img/tatuando.jpg'
      },
      {
        title: 'estilistas',
        img: 'img/maquillando.jpg'
      },
      {
        title: 'apoyo',
        img: 'img/apoyo.jpg'
      },
      {
        title: 'psicología',
        img: 'img/hablando.jpg'
      },
      {
        title: 'radiodiagnóstico',
<<<<<<< HEAD
        img: 'img/mamografia.jpg'
=======
        img: 'img/radiodiagnostico.jpg'
>>>>>>> 5755c849011c7616b5b2dacf1b5dadad795ac97b
      },
    ]
  }
});


const slowLinks = () =>{
  [].slice.call(document.querySelectorAll('a[href^="#"]')).forEach(item => {
    item.addEventListener('click', (e) => {
      let hashval = item.getAttribute('href')
      let target = document.querySelector(hashval)
      target.scrollIntoView({
        behavior: 'smooth'
      })
      history.pushState(null, null, hashval)
      e.preventDefault()
    })
  });
}

const drawMap = () => {
  let mapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: false,
    center: ubicacion,
    zoom:15
  };

  map = new google.maps.Map(document.querySelector(`#mapa`), mapOptions);

  new google.maps.Marker({
    position:ubicacion,
    map,
    title:'CIM Fénix'
  })
}