$('#sizelist a').on('click', function() {
  $('#sizevalue').val($(this).data('value'));
});

$('#country a').on('click', function() {
  $('#select-country').html($(this).html() + '<span class="caret"></span>');  
  console.log(this);            
  /* ($(this).data('value'));*/
});