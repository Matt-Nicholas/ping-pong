$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#uList').prepend('<p>thank you, ' + email + 'has been added to our list!</p>');
  });
});
