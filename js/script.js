$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  dots:false,
  nav: true,
  autoplay:true,
  autoplayTimeout: 2000,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 3
      },
      1000: {
          items: 3
      }
  }
});
var galleryTop = new Swiper('.gallery-top-1', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var galleryThumbs = new Swiper('.gallery-thumbs-1', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;    



var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;    


$(document).ready(function(){
    $(".pic").click(function(){
        $(".weather-area-slider").show()
        $(".pic").hide()
        $(".about-area").attr("style","padding-top:300px")
    })
    $(".fa-circle-xmark").click(function(){
      $(".weather-area-slider").hide()
      $(".pic").show()
      $(".about-area").attr("style","padding-top:100px")
     
      
    })
})

