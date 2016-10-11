(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "0fabb4ba896532482efd54468d9800de";

},{}],2:[function(require,module,exports){
// Business Logic
function Calculator(skinName){
  this.skin = skinName;
}


Calculator.prototype.pingPong = function(num){
  var resultArray = [];
  for(var i = 1; i <= num; i++){
    if((i % 15) === 0){
      resultArray.push('pingpong');
    }else if((i % 5) === 0){
      resultArray.push('pong');
    }else if((i %3) === 0){
      resultArray.push('ping');
    }else{
      resultArray.push(i);
    }
  }
  return resultArray;
};
exports.calculatorModule = Calculator;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Weather(){

}

Weather.prototype.getWeather = function(city){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });}
  
exports.weatherModule = Weather;

},{"./../.env":1}],4:[function(require,module,exports){
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

},{"./../js/pingpong.js":2,"./../js/weather.js":3}]},{},[4]);
