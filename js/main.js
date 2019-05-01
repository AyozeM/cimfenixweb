let map;
const latitud = 28.392096;
const longitud = -16.5217706;
const ubicacion = new google.maps.LatLng(latitud,longitud);

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#year').textContent = new Date().getFullYear();
  document.querySelector('#logo').style.height = `${document.querySelector('#navbar').offsetHeight}px`;
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
  
  var navElems = document.querySelectorAll('.sidenav');
  const navInstances = M.Sidenav.init(navElems);
  [].slice.call(document.querySelectorAll('#mobile-demo li')).map(e=>{
    e.addEventListener('click', () =>{
      const x = M.Sidenav.getInstance(document.querySelector('.sidenav')).close();
    })
  })
  slowLinks();
  drawMap();
});
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
new Vue({
  el:'#formulario',
  data:{
    loading:false,
    formData:{
      name:null,
      email:null,
      phone:null,
      question:null,
      terms:false
    }
  },
  methods:{
    sendForm(){
      this.loading = true;
      setTimeout(() =>{
        M.toast({html:'Tus datos han sido enviados, en breve contactaremos contigo',classes: 'red lighten-2'})
        this.loading = false;
      },1500);      
    }
  }
});
new Vue({
  el: '#services',
  data: {
    services: [
      {
        title: 'tatuajes',
        img: 'img/tatuando.png',
        text:'El tatuaje terapéutico de pezón en 3D le devuelve la confianza a las mujeres que pasaron por una mastectomía. Se trata de una técnica que mejoran el proceso de recuperación física y psicológica de la recién operada.'
      },
      {
        title: 'estilistas',
        img: 'img/estilismo.jpg',
        text:'Pretendemos mejorar, el aspecto físico con tratamientos estéticos, entre los que destacan las adaptaciones de pelucas, tratamientos faciales y capilares, además ofertamos cursos de automaquillaje y cuidados.'
      },
      {
        title: 'apoyo',
        img: 'img/apoyo.jpg',
        text:'En nuestro centro habrá un espacio integro para el desarrollo de actividades dinámicas, como pueden ser el baile, juegos. Además, organizaremos reuniones, es un momento idóneo para acoger a las mujeres de reciente diagnóstico, donde las mujeres hablan abiertamente, expresan e intercambian experiencias.'
      },
      {
        title: 'psicología',
        img: 'img/psicologia.jpg',
        text:'El centro contará con un psicológico especializado en oncología, ayudará a nuestras pacientes a manejar sus emociones durante el diagnóstico y el tratamiento, a mejorar su estado de ánimo y calidad de vida. Además, los familiares de nuestras pacientes podrán recibir ayuda si fuera necesario. Las acompañara en todas las fases de la enfermedad.'
      },
      {
        title: 'radiología',
        img: 'img/radiodiagnostico.jpg',
        text:'El diagnóstico precoz del cáncer es la clave para que los tratamientos sean menos agresivos y tener mejor sobrevida. Por ello, contamos con un novedoso equipo de tomosíntesis de mama de General Electric (SenoClaire) y con un ecógrafo de última tecnología para ecografías mamarias, el Invenia ABUS.'
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
  const mapOptions = {
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