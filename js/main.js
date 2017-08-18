$(document).ready(function(){
  $('#menu').slicknav();
  $(".owl-carousel").owlCarousel({
  	items:4,
  	margin:10,
  	nav: true,
    responsiveClass: true,
    responsive: {
        0:{
          items: 1
        },
        426:{
          items: 2
        },
        769:{
          items: 3
        },
         1025:{
          items: 4
        }
    }
  });
});