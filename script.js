var mySwiper1 = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 120,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1000: {
      slidesPerView: 3
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})



function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




  





