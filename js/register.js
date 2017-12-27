$(document).ready(function() {
  // Deshabilitamos el boton al cargar la página
  $('#btn-number').prop('disabled', true);
  $('#txt-phone').prop('disabled', true);
  // Obtenemos los codigos de ciudad de acuerdo al país
  $('#country a').on('click', function() {
    $('#select-country').html($(this).html() + '<span class="caret"></span>');  
    $('#code-country').val($(this).data('value'));
    $('#txt-phone').prop('disabled', false);     
  });
  // Evento keyup en el texto para validar
  $('#txt-phone').on('keyup', function(evento) {
    // Comparamos la longitud del texto y que sea númerico
    var ascii = evento.keyCode;
    console.log(ascii);
    if ((ascii >= 48 && ascii <= 57) || ascii === 37 || ascii === 39 || ascii === 8) {
      // En el caso que sea númerico evalua la longitud
      if ($(this).val().length === 9) {
        $('#btn-number').prop('disabled', false);
        $('#info').addClass('hidden');
      }
    } else {
      // En el caso que no sea númerico el texto es reemplazado por vacio
      $(this).val('');
      $('#btn-number').prop('disabled', true);
      $('#info').addClass('show');
      $('#info').removeClass('hidden');
    }
  });
});