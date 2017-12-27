$(document).ready(function() {
  $('#country a').on('click', function() {
    $('#select-country').html($(this).html() + '<span class="caret"></span>');  
    console.log(this);            
    
  });
});