// Rolagem do SETOR 3 - slick
$('.sec3-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500
});

//Rooly 0.2.1
const r = rolly({
    view: document.querySelector('.app'),
    native: true
  });
  
  r.init();
  
  AOS.init({
    duration: 1500
  });