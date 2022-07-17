//===============================================================================
// Rolagem do SETOR 3 - slick


$('.sec3-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 1500,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});

//===============================================================================
//Rooly 0.2.1
const r = rolly({
  view: document.querySelector('.app'),
  native: true
});

r.init();

AOS.init({
  duration: 1500
});

//===============================================================================
//ROTAS - Link
function scrollToIdOnClick(event) {
  const element = event.target
  const id = element.getAttribute('href')
  const local = document.querySelector(id).offsetTop

  window.scroll(0, local)
};

const menuItems = document.querySelectorAll('#menu a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
});

//===============================================================================
//Responsividade MENU
function clickBtMenu() {
  const navbar = document.querySelector('#navbar')
  //Adicionando uma classe de ativado ou desativado.
  navbar.classList.toggle('active')
};

const btMenu = document.querySelector('#btn-menu')

btMenu.addEventListener('click', clickBtMenu)