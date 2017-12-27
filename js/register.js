$(document).ready(function() {
  // Deshabilitamos el boton al cargar la página
  $('#btn-number').prop('disabled', true);
// Obtenemos los codigos de ciudad de acuerdo al país
  $('#country a').on('click', function() {
    $('#select-country').html($(this).html() + '<span class="caret"></span>');  
    $('#code-country').val($(this).data('value'));     
  });
  // Evento keyup en el texto para validar
  $('#txt-phone').on('keyup', function() {
    // Comparamos la longitud del texto y que sea númerico
    if ($(this).val().length === 9 && $('#txt-phone').val().match(/^[0-9]+$/)) {
      $('#btn-number').prop('disabled', false);
    } else {
      $('#btn-number').prop('disabled', true);
    }
  });
});