//Complete the solution so that it returns the number of times the search_text is found within the full_text.

//solution('aa_bb_cc_dd_bb_e', 'bb')
//should return 2 since bb shows up twice

//solution('aaabbbcccc', 'bbb')
//should return 1

function solution(fullText, searchText){
var i, test = "", count = 0;

  for(i = 0; i < fullText.length; i++){
    
    if(fullText[i] == searchText[0]){
      
      test = fullText.slice(i, (i + searchText.length));
      if(test === searchText){ count ++;}
      else{ continue; }
      
    }
    
    else { continue; }
  }
  
  return count;
}