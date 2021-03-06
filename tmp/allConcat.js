// User Logic

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function(){
  $('.submitButton').click(function(event){
    event.preventDefault();
    $('#uList').empty();
    var input = parseInt($('#userInput').val());
    var simpleCalculator = new Calculator("hot pink");
    resultArray = simpleCalculator.pingPong(input);
    console.log(resultArray);
    for(var i = 0; i < resultArray.length; i++){
      $('#uList').append('<li>' + resultArray[i] + '</li>');
    }
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#uList').prepend('<p>thank you, ' + email + 'has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city);
  });
});
