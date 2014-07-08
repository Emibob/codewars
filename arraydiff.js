//Your goal in this kata is to implement an array_diff function, which subtracts one array from another.

//It should remove all values from array a, which are present in array b.

function array_diff(a, b) {
  var answer = [], result;
  
  result = a.map(function(value, index, originalArray){
    if(b.length){
      for(var i = 0; i < b.length; i++){
        if(value === b[i]){ break;}
        else{
          if(i !== (b.length-1)){ continue;}
          else{ return value; }
        }
      }
    }
    else{ return value; }
    
  }, b);

  for(var j = 0; j < result.length; j++){
    if(result[j] !== undefined || NaN){
      answer.push(result[j]);
    }
    else{ continue; }
  }

  return answer;
}