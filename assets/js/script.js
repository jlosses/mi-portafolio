// jQuery para validación y smooth scroll
$(function() {
  var $form = $('#formularioContacto');
  var $mensajeResultado = $('#mensajeResultado');

  $form.on('submit', function(e) {
    e.preventDefault();

    var nombre = $('#nombre').val().trim();
    var email = $('#email').val().trim();
    var mensaje = $('#mensaje').val().trim();

    if (nombre === '' || email === '' || mensaje === '') {
      $mensajeResultado.html('<div class="alert alert-danger" role="alert">Error: Todos los campos son obligatorios. Por favor, completa el formulario.</div>').show();
    } else {
      $mensajeResultado.html('<div class="alert alert-success" role="alert">¡Gracias por tu mensaje, ' + $('<div/>').text(nombre).html() + '! Pronto nos pondremos en contacto contigo.</div>').show();
      $form[0].reset();
    }
  });

  // Smooth scroll para enlaces de la navbar
  $('.nav-link').on('click', function(e) {
    var href = $(this).attr('href');

    if (href && href.startsWith('#')) {
      var $target = $(href);
      if ($target.length) {
        e.preventDefault();
        var offset = $target.offset().top - $('.navbar').outerHeight();
        $('html, body').animate({ scrollTop: offset }, 500);
      }
    }
  });
});
