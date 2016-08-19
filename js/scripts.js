// Business Logic
var resultArray = [];
function gameLoop(num){
  for(var i=0;i<num;i++){
    if(((i+1)%15)===0){
      resultArray.push('pingpong');
    }else if(((i+1)%5)===0){
      resultArray.push('pong');
    }else if(((i+1)%3)===0){
      resultArray.push('ping');
    }else{
      resultArray.push(i+1);
    }
  }
}
// User Logic
$(document).ready(function(){
  $('#userInput').click(function(event){
    event.preventDefault();
    $('li').remove();
  });
  $('#submitButton').click(function(event){
    event.preventDefault();
    var input = parseInt($('#userInput').val());
    gameLoop(input);
    for(var i=0;i<resultArray.length;i++){
      $('ul#uList').append('<li>' + resultArray[i] + '</li>');
    }
  });
});
