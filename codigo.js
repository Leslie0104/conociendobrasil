let slideIndex = 1;
showSlides(slideIndex);

// Siguiente/anterior controles
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//------------------------------------------------------------------
// Data de ingles y español

const lenguages = {
  inlglish: {
    navbar: [
      'Home', 'Corners of Brazil', 'Culture', 'Contact'
    ],
    content1 :{
      title: "Immerse yourself in Brazil's vibrant culture",
      subtitle: [
        "Welcome to our portal dedicated to exploring the beauty and diversity of Brazil. From the golden beaches of Rio de Janeiro to the vibrant Amazon rainforest, here you'll discover everything this fascinating country has to offer.",
        "Join us on a journey through its music, cuisine, traditions, and landscapes that captivate the senses.",
        "Start your adventure and experience the magic of Brazil!"
      ]
    },
    content2: 'FEEL THE BRAZILIAN CULTURE',
    content3: {
      title: 'Brazil, where your adventure comes to life.',
      subtitle: [
        'Explore the magic of Brazil through its cuisine, dazzling parades, and vibrant music. Immerse yourself in the flavors, colors, and rhythms that make this country a unique destination.',
        'Your adventure starts here!'
      ]
    },
    content4: [
      'Gastronomy', 'Parades', 'Music'
    ],
    footer: {
      content1: {
        title: 'Quick Links',
        items: [
          'Home', 'Corners of Brazil', 'culture', 'contact'
        ]
      },
      content2: {
        title: 'Social networks',
        items: [
          'Facebook', 'Instagram', 'Whatsapp'
        ]
      },
      content3: {
        title: 'Contact',
        items: [
          'Email: info@conocebrasil.com', 'Telephone: +52 143 257 689'
        ]
      }
    }
  },
  spanish: {
    navbar: [
      'Inicio', 'Rincones de Brasil', 'Cultura', 'Contacto'
    ],
    content1 :{
      title: "Sumérgete en la cultura vibrante de Brasil",
      subtitle: [
        "Bienvenido a nuestro portal dedicado a explorar la belleza y diversidad de Brasil. Desde las playas doradas de Río de Janeiro hasta la selva amazónica llena de vida, aquí descubrirás todo lo que este país fascinante tiene para ofrecer.",
        "Acompáñanos en un viaje por su música, gastronomía, tradiciones y paisajes que cautivan los sentidos.",
        "¡Empieza tu aventura y vive la magia de Brasil!"
      ]
    },
    content2: 'SIENTE LA CULTURA BRASILEÑA',
    content3: {
      title: 'Brasil, donde tu aventura cobra vida.',
      subtitle: [
        'Explora la magia de Brasil a través de su gastronomía, sus deslumbrantes desfiles y su música vibrante. Déjate envolver por los sabores, colores y ritmos que hacen de este país un destino único.',
        '¡Tu aventura comienza aquí!'
      ]
    },
    content4: [
      'Gastronomia', 'Desfiles', 'Música'
    ],
    footer: {
      content1: {
        title: 'Quick Links',
        items: [
          'Inicio', 'Rincones de Brasil', 'Cultura', 'Contacto'
        ]
      },
      content2: {
        title: 'Social networks',
        items: [
          'Facebook', 'Instagram', 'Whatsapp'
        ]
      },
      content3: {
        title: 'Contact',
        items: [
          'Email: info@conocebrasil.com', 'Teléfono: +52 143 257 689'
        ]
      }
    }
  }
}

const changeLenguage = ( lenguage ) => {
  

  let lenguageSelected;
  
  if ( lenguage === 'en' )
    lenguageSelected = lenguages.inlglish;
  else
    lenguageSelected = lenguages.spanish;

  document.getElementById('menu').innerHTML = `
    <li><a href="#">${ lenguageSelected.navbar[0] }</a></li>
    <li class="dropdown">
      <a href="#servicios" class="dropdown-toggle">${ lenguageSelected.navbar[1] }</a>
      <div class="dropdown-content">
        <a href="#servicio1">Rio de Janeiro</a>
        <a href="#servicio2">Sao Paulo</a>
        <a href="#servicio3">Brasilia</a>
      </div>
    </li>
    <li><a href="#">${ lenguageSelected.navbar[2] }</a></li>
    <li><a href="#">${ lenguageSelected.navbar[3] }</a></li>
    <li>
      <div class="idioma">
        <select name="idioma" id="idioma" onChange="changeLenguage(this.value)">
          <option value="es" ${ lenguage === 'es' ? 'selected' : '' }>Español</option>
          <option value="en" ${ lenguage === 'en' ? 'selected' : '' }>Inglés</option>
        </select>
      </div>
    </li>
  `;

  document.getElementById('banner-content').innerHTML = `
    <h1>${ lenguageSelected.content1.title }</h1>
    <p>${ lenguageSelected.content1.subtitle[0] }</p>
    <p>${ lenguageSelected.content1.subtitle[1] }</p>
    <p>${ lenguageSelected.content1.subtitle[2] }</p>
  `;

  document.getElementById('caja-texto').innerHTML = `
    <h3>${ lenguageSelected.content2 }</h3>
  `;

  document.getElementById('caja-texto-2').innerHTML = `
    <h2>${ lenguageSelected.content3.title }</h2>
    <p>${  lenguageSelected.content3.subtitle[0] }</p>
    <p>${  lenguageSelected.content3.subtitle[1] }</p>
  `;

  for (let i = 0; i < document.getElementsByClassName('btn').length; i++) {
    document.getElementsByClassName('btn')[i].innerHTML = lenguageSelected.content4[i];
  }

  document.getElementById('footer-links').innerHTML = `
    <h4>${  lenguageSelected.footer.content1.title }</h4>
    <ul>
      <li><a href="#">${ lenguageSelected.footer.content1.items[0] }</a></li>
      <li><a href="#">${ lenguageSelected.footer.content1.items[1] }</a></li>
      <li><a href="#">${ lenguageSelected.footer.content1.items[2] }</a></li>
    </ul>
  `;

  document.getElementById('redes-sociales').innerHTML = `
    <h4>${  lenguageSelected.footer.content2.title }</h4>
    <ul>
      <li><a href="#"><img src="images/Facebook.png" alt="Facebook"></a>${  lenguageSelected.footer.content2.items[0] }</li>
      <li><a href="#"><img src="images/Instagram.png" alt="Facebook"></a>${ lenguageSelected.footer.content2.items[1] }</li>
      <li><a href="#"><img src="images/WhatsApp.png" alt="Facebook"></a>${  lenguageSelected.footer.content2.items[2] }</li>
    </ul>
  `;

  document.getElementById('contacto').innerHTML = `
    <h4>${  lenguageSelected.footer.content3.title }</h4>
    <ul>
      <li><a href="#"><img src="images/email.png" alt="Email"></a>${  lenguageSelected.footer.content3.items[0] }</li>
      <li><a href="#"><img src="images/telefono.png" alt="Teléfono"></a>${  lenguageSelected.footer.content3.items[1] }</li>
    </ul>
  `;
}

//-----------------------------------------------------
//Mensaje Bienvenida

document.addEventListener("DOMContentLoaded", function () {
    const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
    const textoBienvenida = document.getElementById("texto-bienvenida");
    const cerrarBtn = document.getElementById("cerrar-mensaje");  // ← este es el ID correcto en HTML

    if (!mensajeBienvenida || !textoBienvenida || !cerrarBtn) {
        console.error("No se encontraron los elementos del DOM necesarios.");
        return;
    }

    const lang = navigator.language || navigator.userLanguage;
    const hora = new Date().getHours();

    let saludo = "";

    if (hora < 12) {
        saludo = { es: "¡Buenos días!", en: "Good morning!", fr: "Bonjour !", de: "Guten Morgen!", it: "Buongiorno!" };
    } else if (hora < 18) {
        saludo = { es: "¡Buenas tardes!", en: "Good afternoon!", fr: "Bon après-midi !", de: "Guten Tag!", it: "Buon pomeriggio!" };
    } else {
        saludo = { es: "¡Buenas noches!", en: "Good evening!", fr: "Bonsoir !", de: "Guten Abend!", it: "Buona sera!" };
    }

    let idioma = "es";
    if (lang.startsWith("en")) idioma = "en";
    else if (lang.startsWith("fr")) idioma = "fr";
    else if (lang.startsWith("de")) idioma = "de";
    else if (lang.startsWith("it")) idioma = "it";

    textoBienvenida.textContent = `${saludo[idioma]} Bienvenid@ a tu aventura en Brasil.`;
    mensajeBienvenida.style.display = "block";

    // Cierra el mensaje al hacer clic en la X
    cerrarBtn.addEventListener("click", function () {
        mensajeBienvenida.style.display = "none";
    });
});
