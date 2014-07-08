//Complete the squareSum method so that it squares each number passed into it and then sums the results together.

//For example:
//squareSum([1,2, 2]); 
//should return 9


//NEW SOLUTION
function squareSum(numbers){
  return (numbers.map(function square(value){ return value * value })).reduce(function(a, b){ return a + b });
}


//ORIGINAL SOLUTION
function squareSum(numbers){
var total, squared;
total = 0;

  for(var i = 0; i < numbers.length; i++){
    squared = (numbers[i] * numbers[i]);
    total = total + squared;
  }
  
  return total;
}