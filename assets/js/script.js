jQuery(document).ready(function() {
	$('a.mdl-navigation__link').hover(function() {
    $( this ).addClass( "is-active" );
  }, function() {
    $( this ).removeClass( "is-active" );
  });

  var $contactForm = $('.contato-form');

  $contactForm.submit(function(e) {
    e.preventDefault();
    console.log('oi')

    $.ajax({
      url: 'http://formspree.io/clubeouro@goldenretrieverrn.com.br',
      type: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      beforeSend: function() {
        $contactForm.find('#msgForm').html('<div class="alert alert-info">Enviando mensagem</div>');
        $contactForm[0].reset();
      },
      success: function(data) {
        $contactForm.find('.alert-info').html('<div class="alert alert-success">Mensagem enviada!</div>').removeClass('alert alert-info');
      },
      error: function(err) {
        $contactForm.find('.alert-info').html('<div class="alert alert-danger">Ocorreu um erro ao enviar sua mensagem, tente novamente mais tarde.</div>').removeClass('alert alert-info');
      }
    });
  });
	
});