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
