//Write a small function that returns the values of an array that are not odd.

//All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ){
var evenNumbers = [];

  for(var i = 0; i < values.length ; i++){
    if((values[i] % 2) === 0){
      evenNumbers.push(values[i]);
    }
    else { 
     continue;
    }
  }
  
  return evenNumbers;
  
}