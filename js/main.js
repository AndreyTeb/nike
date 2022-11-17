$(function(){
  
  $('.menu__btn').on('click', function(){
    $('.header__bottom-inner').toggleClass('header__bottom-inner--active');
  });

  $('.buy__inner-photos__thumb').slick({
    asNavFor: '.buy__inner-photos__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
  });

  $('.buy__inner-photos__big').slick({
    asNavFor: '.buy__inner-photos__thumb',
    fade: true,
    arrows: false,
    draggable: false,
  });

  

});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

function myFunction(x) {
  x.classList.toggle("change");
}