//The main idea is to count all the occuring characters(UTF-8) in string. //If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

//What if the string is empty ? Then the result should be empty object literal { }

function count(string) {
var countLetters = {}, letterArrays = [[string.charAt(0)]];

  if(string.length > 0){

    for(var i = 1; i < string.length; i++){
      for(var j = 0; j < letterArrays.length; j++){
        if(string.charAt(i) === ("" || " ")){
          break
        }
        if(string.charAt(i) === letterArrays[j][0]){
          letterArrays[j].push(string.charAt(i));
          break;
        }
        else{
          if(j === (letterArrays.length - 1)){
            letterArrays.push([string.charAt(i)]);
            break;
          }
          else{
            continue;
          }
        }
      }    
   }
 
   for(var k = 0; k < letterArrays.length; k++){
     countLetters[letterArrays[k][0]] = letterArrays[k].length;
   }
   
  }
  return countLetters;
}