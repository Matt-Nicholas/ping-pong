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
