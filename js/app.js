//FOUNDATION FRAMEWORK
$(document).foundation()

$(document).ready(function(){

  // SLIDER SLICK
  $('.slider-gallery').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //FANCYBOX
  $("[data-fancybox]").fancybox({
		// Options will go here
	});

});

$('#contact-form').submit( function(e) {
  var name = document.getElementById('name'),
      email = document.getElementById('email'),
      message = document.getElementById('message');

  if ( !name.value || !email.value || !message.value ) {
    console.log('por favor revisa tus datos');
  }else {
    $.ajax({
      url: "http://formspree.io/jonnathantorcates95@gmail.com",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json"
    });
    e.preventDefault();
    $(this).get(0).reset();
    console.log('Pedido enviado');
  }
});
