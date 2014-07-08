//String ends with?

function solution(str, ending){
var endingIndex, strIndex;

  for(var i = 0; i < ending.length; i++){
    strIndex = (str.length - 1) - i;
    endingIndex = Math.abs(i - (ending.length)) -1;
    
    if(str.charAt(strIndex) !== ending.charAt(endingIndex)){
      return false;
    }
    else{
      continue;
    }
  }
  return true;
}