//Oh no, our Math object was "accidently" reset. 
//Can you re-implement some of those functions? 
//We can assure, that only non-negative numbers are passed as arguments.
//So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

//Here is a list of functions, we need:

//Math.round()
//Math.ceil()
//Math.floor()

Math.round = function(number) {
  if((number % parseInt(number) < 0.5) || (number === 0)){
    return parseInt(number);
  }
  else{
    return number - (number % parseInt(number)) + 1;
  }
};

Math.ceil = function(number) {
  if(number !== parseInt(number)){
   return number - (number % parseInt(number)) + 1; 
  }
  else{ return number; }
};

Math.floor = function(number) {
  return parseInt(number);
};