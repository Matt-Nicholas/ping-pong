// Business Logic
function gameLoop(num){
  var resultArray = [];
  var resultString = "";
  for(var i = 1; i <= num; i++){
    if((i % 15) === 0){
      resultArray.push('<li>pingpong</li>');
    }else if((i % 5) === 0){
      resultArray.push('<li>pong</li>');
    }else if((i %3) === 0){
      resultArray.push('<li>ping</li>');
    }else{
      resultArray.push('<li>' + i + '</li>');
    }
  }
  resultString = resultArray.join('');
  return resultString;
}
// User Logic
$(document).ready(function(){
  $('.submitButton').click(function(event){
    event.preventDefault();
    $('#uList').empty();
    var input = parseInt($('#userInput').val());
    resultString = gameLoop(input);
    $('#uList').append(resultString);
  });
});
