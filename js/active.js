$(document).ready(function(){
    /* slider-active */

$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

   /* project-active */

$('.project-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
    /* blog-popup */

$('.blog-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
    margin:50,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
       
    }
})

    /* test-popup */

$('.video-popup').magnificPopup({
  type: 'iframe'
  // other options
});


})