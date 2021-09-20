const swiper = new Swiper(".swiper-container", {
    
    autoplay: {
        delay: 2000,
      },
      
      loop: true,
      slidesPerView: 1,
      loopedSlides:1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
const swiper2 = new Swiper(".swiper-container2", {
    
    autoplay: {
        delay: 2000,
      },
      slidesPerView:1,
      loop: true,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

